# T-MACS Microsoft Clarity Analytics

## Architecture

T-MACS uses one framework-free analytics module at `src/analytics.js`. It owns the Microsoft Clarity loader, custom events, custom tags, value validation, and event delegation. Public and authenticated pages load the same module so the entry funnel can be measured without installing Clarity twice on one page.

Analytics is deliberately isolated from application behavior:

- Every Clarity operation is guarded and fails silently.
- Only allowlisted event names, tag names, and tag values are accepted.
- Names, email addresses, URLs, search text, profile text, authentication identifiers, and other free text are not accepted.
- Clarity unavailability does not block page loading, redirects, navigation, matching, Mapbox, profiles, scheduling, or the tour.
- One delegated click listener covers current and dynamically inserted navigation, mentor-card, Mobile Back, scheduling, feedback, external-link, and map-reset controls.

The public landing page loads the module before its desktop redirect so the landing event can be queued without changing redirect behavior. The authenticated app loads it in the document head. The previous inline Clarity loader was moved into the centralized module; the project ID remains `x2jiagxeku`.

## Phase 2 event inventory

| Event | When it fires |
| --- | --- |
| `landing_page_viewed` | Once when the public landing document loads. |
| `yale_sign_in_clicked` | A Yale Entra sign-in link is selected. Automatic desktop redirects are not misreported as clicks. |
| `app_loaded` | Once when the protected `/app` document loads. |
| `mobile_navigation_selected` | A navigation control is selected at the mobile breakpoint. |
| `desktop_navigation_selected` | A navigation control is selected above the mobile breakpoint, where such a control is present. |
| `match_view_opened` | The authenticated app opens or is initially requested in Match view. |
| `browse_view_opened` | The authenticated app opens or is initially requested in Browse view. |
| `map_view_opened` | The authenticated app opens or is initially requested in Map view. |
| `tour_view_opened` | The authenticated app opens or is initially requested in Tour/Guide view. |

`map_region_viewed` is intentionally omitted because T-MACS has no approved broad-region taxonomy. Phase 3A covers mentor engagement and scheduling, Phase 3B covers matching, Phase 3C covers Browse search and filtering, Phase 3D covers the guided tour, and Phase 3E completes Map, engagement, and broad timing instrumentation.

## Phase 3A mentor engagement and scheduling registry

| Event | Trigger | Safe dimensions | Deduplication rule | Files involved |
| --- | --- | --- | --- | --- |
| `mentor_card_clicked` | A generated mentor card is activated. Map markers do not count as card clicks. | `mentor_id` | Once per actual card activation; the single capture-phase delegated listener prevents overlapping mobile handlers from duplicating it. | `src/analytics.js`, `src/app/app.js` |
| `mentor_profile_opened` | `showMentor` begins a profile visit. | `mentor_id` | Once per profile visit. Re-entrant calls for the already-active opaque ID are ignored. | `src/analytics.js`, `src/app/app.js` |
| `mentor_profile_replaced` | A different mentor replaces the currently active profile. | `previous_mentor_id`, `mentor_id` | Once per actual transition; selecting the same mentor again is ignored. | `src/analytics.js`, `src/app/app.js` |
| `mentor_profile_section_viewed` | At least 50% of an approved profile-section marker intersects the viewport. | `mentor_id`, `profile_section` | Once per section per profile visit. The observer disconnects when the visit closes or is replaced. | `src/analytics.js`, `src/app/app.js` |
| `mentor_profile_closed` | Existing Mobile Back, Tour/Guide restore, filter reset, match reset/start, or another existing welcome-panel restore closes the active analytics profile visit. | `mentor_id` | Once per active visit; repeated restore/back handlers are ignored after state is cleared. | `src/analytics.js`, `src/app/app.js` |
| `scheduling_option_clicked` | Any generated mentor scheduling button is activated. | `mentor_id`, `scheduling_method` | Once per actual activation through the single delegated listener. | `src/analytics.js`, `src/app/app.js` |
| `email_mentor_clicked` | The scheduling button uses the existing `mailto:` pathway. | `mentor_id`, `scheduling_method=email` | Once per actual activation. | `src/analytics.js`, `src/app/app.js` |
| `bookings_link_clicked` | The scheduling button uses the shared Microsoft Bookings pathway. | `mentor_id`, `scheduling_method=bookings` | Once per actual activation. | `src/analytics.js`, `src/app/app.js` |
| `external_scheduling_link_clicked` | The scheduling button uses a mentor-specific external scheduling pathway. | `mentor_id`, `scheduling_method=external` | Once per actual activation. The branch is supported even though no current record uses it. | `src/analytics.js`, `src/app/app.js` |
| `scheduling_intent_reached` | The first valid scheduling activation in the browser session. | `mentor_id`, `scheduling_method` | Once per session using `sessionStorage`, with an in-memory fallback. | `src/analytics.js`, `src/app/app.js` |

Mentor website links (`.profile-link`) are not scheduling controls and do not fire scheduling events.

## Phase 3B matching registry

Matching analytics are emitted from `runMatch()` and the existing `showMentor()` transition, not from extra per-control or mobile listeners.

| Event | Trigger | Safe dimensions | Deduplication rule | Files involved |
| --- | --- | --- | --- | --- |
| `match_view_opened` | Match is requested through navigation, an initial `?view=match`, or the first submitted matching action. | `selected_navigation_mode=match` | Once per document. Programmatic and overlapping mobile paths converge on the same once-key. | `src/analytics.js`, `src/app/app.js` |
| `match_filter_selected` | A submitted criterion changes from inactive to active; changing one predefined selection to another also submits a remove followed by a select. | `filter_type`, `active_filter_count_band`, `keyword_used`, `keyword_length_band` | Once per changed filter type in the submitted attempt. Raw values are retained only transiently for local comparison and are never passed to analytics. | `src/app/app.js` |
| `match_filter_removed` | A previously submitted criterion is absent or replaced in the next submitted attempt. | `filter_type`, `active_filter_count_band`, `keyword_used`, `keyword_length_band` | Once per changed filter type in the submitted attempt. | `src/app/app.js` |
| `match_started` | The Match button submits at least one active criterion, immediately before the existing ranking calculation begins. | `active_filter_count_band`, `keyword_used`, `keyword_length_band` | Exactly once per qualifying `runMatch()` call. A no-criteria submission is a reset, not an attempt. | `src/app/app.js` |
| `match_completed` | The existing mentor scoring and sorting calculation has produced the final ranked array, before rendering. | `active_filter_count_band`, `result_count_band`, `match_score_band`, `keyword_used`, `keyword_length_band` | Exactly once per completed qualifying `runMatch()` call. | `src/app/app.js` |
| `match_results_displayed` | The completed ranked array has been passed through the existing `render(..., "match")` and match-header update. | `active_filter_count_band`, `result_count_band`, `match_score_band`, `keyword_used`, `keyword_length_band` | Once per distinct local result signature. Repeating criteria that produce the identical ordered IDs and scores does not fire again until reset or a different result set appears. The signature is never transmitted. | `src/app/app.js` |
| `match_result_opened` | An existing mentor profile visit begins from an object carrying a calculated match percentage. | `mentor_id`, `match_score_band` | Once per matching-result profile visit, using the existing profile-visit deduplication. | `src/app/app.js` |
| `match_reset` | The Match button is submitted with zero active criteria and the existing browse reset path runs. | `active_filter_count_band=zero`, `keyword_used=no`, `keyword_length_band=none` | Once per no-criteria `runMatch()` call. It does not fire `match_started` or `match_completed`. | `src/app/app.js` |
| `no_match_results_seen` | A completed matching attempt actually renders an empty ranked array. | `active_filter_count_band`, `result_count_band=zero`, `keyword_used`, `keyword_length_band` | Once with the distinct empty result set. The current algorithm normally ranks the full mentor list, so this is a defensive zero-results path. | `src/app/app.js` |

Definitions:

- **Started:** at least one criterion was submitted and execution is about to enter the unchanged scoring/ranking calculation.
- **Completed:** scoring and sorting returned the final ranked array without throwing.
- **Results displayed:** the existing result renderer and match-result header completed for a result signature not already displayed.

## Phase 3C Browse, search, and filtering registry

Browse analytics are emitted from the existing `refresh()` pipeline after `applyFilters()` returns. No additional search-input, filter-control, or mobile-navigation listeners are added.

| Event | Trigger | Safe dimensions | Deduplication rule | Files involved |
| --- | --- | --- | --- | --- |
| `browse_view_opened` | Browse results first render, Browse navigation is selected, or an initial `?view=browse` is requested. | `selected_navigation_mode=browse` | Once per document. Programmatic and overlapping mobile paths converge on the same once-key. | `src/analytics.js`, `src/app/app.js` |
| `browse_started` | Browse criteria transition from no active search/filters to at least one active criterion. | `active_filter_count_band`, `result_count_band`, `search_used`, `search_length_band` | Once per active Browse cycle. A later complete reset permits a new cycle. | `src/app/app.js` |
| `browse_filter_selected` | A submitted predefined Specialty or Focus filter changes from empty to selected; replacing a selection emits remove then select. | `filter_type`, `active_filter_count_band`, `result_count_band` | Once per changed filter type in the core refresh. Filter values are not transmitted. | `src/app/app.js` |
| `browse_filter_removed` | A previously active predefined Specialty or Focus filter is cleared or replaced. | `filter_type`, `active_filter_count_band`, `result_count_band` | Once per changed filter type in the core refresh. Duplicate mobile refreshes see unchanged state and do not repeat it. | `src/app/app.js` |
| `browse_search_used` | Search transitions from empty to non-empty during a Browse cycle. | `search_used=yes`, `search_length_band`, `active_filter_count_band`, `result_count_band` | Once per non-empty search cycle. Editing an already non-empty search does not repeat this event. | `src/app/app.js` |
| `browse_results_displayed` | The existing Browse renderer completes for a result state not currently displayed. | `active_filter_count_band`, `result_count_band`, `search_used`, `search_length_band` | Once per distinct local result-state signature, or when Browse replaces Match results. The signature uses active filter types, a length band, and ordered opaque mentor IDs; it is never transmitted. | `src/app/app.js` |
| `browse_reset` | Previously active Browse criteria transition to all fields clear. | `active_filter_count_band=zero`, `result_count_band`, `search_used=no`, `search_length_band=none` | Once per active-to-clear transition. | `src/app/app.js` |
| `empty_results_seen` | The existing Browse renderer actually presents zero mentors. | `active_filter_count_band`, `result_count_band=zero`, `search_used`, `search_length_band` | Once per distinct empty result state. Repeated mobile refreshes of the same empty state are ignored. | `src/app/app.js` |

For Phase 3C, **reset** means all Browse fields transitioned from at least one active criterion to clear. There is no dedicated desktop Browse reset control. This definition covers manually clearing the final field and existing navigation-driven mobile resets; initial page load with already-empty fields is not a reset.

## Phase 3D guided-tour registry

Tour analytics use the central `runWelcomeTourPreview()` start/stop state and a single observer on the shared numbered-step classes. No mobile wrapper, cue table, timing value, highlight, audio handler, scroll behavior, or instructional text is modified.

| Event | Trigger | Safe dimensions | Deduplication rule | Files involved |
| --- | --- | --- | --- | --- |
| `tour_view_opened` | Tour/Guide is requested, tutorial help is selected, or a tour run begins. | `selected_navigation_mode=tour` | Once per document across query, navigation, desktop, and mobile paths. | `src/analytics.js`, `src/app/app.js` |
| `tutorial_help_opened` | An authenticated user selects an existing Tour/Guide navigation or mobile-home control. | None | Once per actual help-navigation activation through the existing centralized click delegation. | `src/analytics.js` |
| `tour_started` | A valid visual or voice tour run begins after existing reduced-motion, profile-selection, and required-element guards pass. | None | Once per run. Replay runs also begin a run and therefore fire `tour_started`. | `src/analytics.js`, `src/app/app.js` |
| `tour_replayed` | A run begins from the existing Replay Tour control. | None | Once for that replay run, alongside `tour_started`. Voice Start controls do not fire it. | `src/analytics.js`, `src/app/app.js` |
| `tour_step_viewed` | A shared numbered step first becomes active or complete during the current run. | `tour_step` | Once for each of steps `1`, `2`, and `3` per run, regardless of how many wrappers repeat a cue. | `src/analytics.js` |
| `tour_completed` | All three shared numbered steps reach their existing completed state. | None | Once per run. Later settle/ended cues are ignored. | `src/analytics.js` |
| `tour_skipped` | An active, incomplete app-controlled run is cancelled through the existing central `stopWelcomeTour()` path, or its welcome panel is replaced before completion. | None | Once per incomplete run. Starting another run first closes the prior active run as skipped. | `src/analytics.js`, `src/app/app.js` |

Definitions:

- **Started:** a valid run begins; this includes both first runs and replay runs.
- **Replayed:** the existing Replay Tour action began that run; it is an additional classification of `tour_started`.
- **Skipped:** an active run ended through an existing cancellation/replace path before all three steps completed.
- **Completed:** all three numbered steps reached the existing completed state; later duplicate cues do not repeat it.

## Phase 3E Map, engagement, and timing registry

Map initialization, coordinates, viewport behavior, and reset behavior remain unchanged. The existing marker activation transitions call the centralized module with the existing opaque mentor ID.

| Event | Trigger | Safe dimensions | Deduplication rule | Files involved |
| --- | --- | --- | --- | --- |
| `map_view_opened` | Map navigation is selected or an initial `?view=map` is requested. | `selected_navigation_mode=map` | Once per actual centralized view-open transition; overlapping mobile handlers do not add analytics listeners. | `src/analytics.js` |
| `map_opened` | The same validated Map view transition occurs. | `discovery_method=map`, `map_used=yes` | Once per view-open transition. It is separate from navigation so Map adoption can be analyzed directly. | `src/analytics.js` |
| `map_marker_selected` | An existing Mapbox marker is activated by click, Enter, or Space before the unchanged profile-opening behavior. | `mentor_id` | Once per actual marker activation. Click and keyboard paths are mutually exclusive. | `src/analytics.js`, `src/app/app.js` |
| `map_reset` | The existing `resetMapButton` is activated. | None | Once per actual button activation through centralized delegation. Navigation-driven mobile viewport resets are not reported as explicit resets. | `src/analytics.js` |
| `error_state_seen` | The Yale session-check page displays its existing missing-session or fetch-failure state. | `error_type` | Once when the existing visible state is reached; displayed response/error details are never passed to analytics. | `src/analytics.js`, `src/auth-check.html` |
| `external_link_clicked` | A dynamically available HTTP(S) feedback, mentor-profile, or scheduling link is activated. | `external_link_type` | Once per actual delegated activation. URLs and hostnames are not transmitted. | `src/analytics.js` |
| `feedback_link_clicked` | An existing success, issue, or idea feedback-form link is activated. | `feedback_type` | Once per actual delegated activation. Form URLs are not transmitted. | `src/analytics.js` |
| `app_to_discovery_time` | The session's first Match, Browse, or Map action follows app load. | `time_band` | Once per browser session. | `src/analytics.js` |
| `discovery_to_mentor_profile_time` | The first mentor profile opens after discovery begins. | `time_band` | Once per browser session. | `src/analytics.js` |
| `mentor_profile_to_scheduling_time` | The first scheduling option is activated after a mentor profile opens. | `time_band` | Once per browser session. | `src/analytics.js` |

`map_region_viewed` is not implemented. No broad-region taxonomy has been approved, and T-MACS does not infer one from coordinates, cities, marker clusters, viewport bounds, or user location.

## Custom tags

| Tag | Allowed values |
| --- | --- |
| `device_experience` | `mobile`, `desktop` |
| `entry_route` | `public_landing`, `authenticated_app`, `auth_check` |
| `selected_navigation_mode` | `match`, `browse`, `map`, `tour` |
| `visit_type` | `first_time`, `returning` |
| `application_area` | `public`, `authenticated` |
| `mentor_id` | Opaque values matching `mentor_001` through `mentor_999` |
| `previous_mentor_id` | Opaque values matching `mentor_001` through `mentor_999` |
| `profile_section` | `specialties`, `focus_areas`, `overview`, `availability`, `scheduling` |
| `scheduling_method` | `email`, `bookings`, `external` |
| `filter_type` | `specialty`, `focus`, `keyword` |
| `active_filter_count_band` | `zero`, `one`, `two`, `three` |
| `result_count_band` | `zero`, `one_to_five`, `six_to_ten`, `eleven_plus` |
| `match_score_band` | `under_50`, `50_to_74`, `75_to_99`, `100` |
| `keyword_used` | `yes`, `no` |
| `keyword_length_band` | `none`, `under_10`, `10_to_24`, `25_plus` |
| `search_used` | `yes`, `no` |
| `search_length_band` | `none`, `under_10`, `10_to_24`, `25_plus` |
| `tour_step` | `1`, `2`, `3` |
| `tour_completion_status` | `not_completed`, `completed` |
| `match_used` | `yes`, `no` |
| `browse_used` | `yes`, `no` |
| `map_used` | `yes`, `no` |
| `scheduling_intent_reached` | `yes`, `no` |
| `discovery_method` | `match`, `browse`, `map` |
| `time_band` | `under_30_seconds`, `30_to_60_seconds`, `1_to_3_minutes`, `over_3_minutes` |
| `error_type` | `authentication_session_missing`, `authentication_check_failed` |
| `external_link_type` | `mentor_profile`, `scheduling`, `feedback`, `other` |
| `feedback_type` | `success`, `issue`, `idea` |

First-time/returning status uses only a local `localStorage` flag. It does not identify a person and is not tied to Yale authentication.

## Available funnels

1. Landing: `landing_page_viewed` → `yale_sign_in_clicked` → `app_loaded`.
2. Discovery selection: `app_loaded` → navigation event → `match_view_opened`, `browse_view_opened`, or `map_view_opened`; `discovery_method` supplies the bounded method dimension.
3. Discovery results: `match_started` or `browse_started` → corresponding `*_results_displayed` → `mentor_profile_opened`. Map discovery uses `map_opened` → `map_marker_selected` → `mentor_profile_opened`.
4. Scheduling: `mentor_profile_opened` → `scheduling_option_clicked` → session-once `scheduling_intent_reached`.
5. Tour: `tour_started` → `tour_completed` → later Match/Browse/Map navigation and corresponding discovery view event.

The `match_used`, `browse_used`, `map_used`, tour-completion, scheduling-intent, and discovery-method tags provide funnel-compatible session segmentation without identity data.

## Time-band definitions

Elapsed time is calculated internally with `performance.now()`. No timestamp or exact duration is sent. Each timing event fires at most once per browser session and uses only:

- `under_30_seconds`: less than 30 seconds
- `30_to_60_seconds`: at least 30 seconds and less than 60 seconds
- `1_to_3_minutes`: at least 60 seconds and less than 180 seconds
- `over_3_minutes`: at least 180 seconds

The clocks measure app load to first Match/Browse/Map action, first discovery action to first profile opening, and the current profile opening to the first scheduling activation.

## Privacy protections

- No Yale NetID, identity claim, name, email address, mentor biography, scheduling URL, or search value is sent.
- No coordinate, viewport bound, city, inferred region, user location, exact timestamp, exact duration, URL, or hostname is sent.
- Matching keywords are reduced to `keyword_used` and a broad character-length band. Keyword content is never passed to the analytics module or used in the local result-set signature.
- Browse searches are reduced to `search_used` and a broad character-length band. Search content, names, cities, and locations are never passed to analytics or stored in the result-state signature.
- Specialty and Focus values remain local comparison state. Only the nonsensitive filter type is transmitted, including for identity or lived-experience selections.
- Tour analytics transmit only step numbers. Narration, instructional text, cue timing, and audio state are not transmitted.
- Tour completion status is stored only as a yes/no session flag and reflected in the allowlisted Clarity session tag.
- Mentor records are not altered with analytics fields. A separate local lookup maps existing names to stable opaque IDs; only the opaque ID passes the analytics allowlist.
- Event and tag inputs are normalized to short lowercase tokens.
- Unknown event names, tag names, and tag values are rejected.
- The module does not call Clarity's identity API.
- The module does not reproduce Clarity's built-in dead-click, rage-click, or scrolling measurements.
- No external analytics service was added.

## Mentor-ID mapping and administrator-dashboard compatibility

Mentor analytics IDs come from the separate `MENTOR_ANALYTICS_IDS` lookup in `src/app/app.js`. Mentor records are unchanged. IDs use the stable opaque form `mentor_001`; Clarity receives no mentor name, contact data, location, or biography.

The fixed event names, bounded tags, result/time bands, and opaque IDs can feed a future administrator dashboard through aggregated Clarity exports. A future dashboard must preserve these allowlists, report groups rather than identifiable sessions, suppress small cohorts where appropriate, and must not join opaque IDs to contact or authentication data in analytics. No dashboard is implemented in this phase.

## Browser testing

1. Open browser developer tools and select the Console.
2. Confirm `window.TMACSAnalytics` exposes the documented base helpers plus the Phase 3A profile-state helpers.
3. Confirm `typeof window.clarity === "function"` after `analytics.js` loads.
4. Temporarily block `clarity.ms` in developer tools and reload. The page and all navigation must continue to work without console errors from T-MACS analytics.
5. Select each landing/mobile navigation option once and inspect Clarity's queued calls with `window.clarity.q` before the remote Clarity script replaces the queue.
6. Verify that no queued event or tag contains names, emails, search text, profile text, or full URLs.

For a local no-network safety test, block Clarity before loading the page rather than editing application code.

## Finding events and tags in Clarity

After deployment and normal Clarity processing time:

- Open the T-MACS Clarity project.
- Use custom-event filters to select the event names listed above.
- Use custom-tag filters to segment sessions by the allowed tag values.
- Build funnels by applying the event sequence in the order documented above.

## Adding future events safely

1. Add the fixed event name to the `allowedEvents` set in `src/analytics.js`.
2. If a dimension is required, add only a bounded, non-identifying tag and explicit value allowlist.
3. Never pass user-entered text, names, emails, biographies, identity claims, precise locations, timestamps, or URLs.
4. Instrument the application's existing state transition rather than adding parallel behavior.
5. Prefer the centralized delegated click listener for dynamic controls.
6. Define the event's deduplication scope and test with Clarity both available and unavailable.
7. Update this inventory and the relevant funnel documentation.
