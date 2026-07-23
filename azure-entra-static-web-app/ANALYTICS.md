# T-MACS Microsoft Clarity Analytics

## Architecture

T-MACS uses one framework-free analytics module at `src/analytics.js`. It owns the Microsoft Clarity loader, custom events, custom tags, value validation, and event delegation. Public and authenticated pages load the same module so the entry funnel can be measured without installing Clarity twice on one page.

Analytics is deliberately isolated from application behavior:

- Every Clarity operation is guarded and fails silently.
- Only allowlisted event names, tag names, and tag values are accepted.
- Names, email addresses, URLs, search text, profile text, authentication identifiers, and other free text are not accepted.
- Clarity unavailability does not block page loading, redirects, navigation, matching, Mapbox, profiles, scheduling, or the tour.
- One delegated click listener covers current and dynamically inserted navigation controls.

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

Feature events for matching, filters, map markers, mentor profiles, scheduling, and tour steps are intentionally deferred to Phase 3.

## Phase 2 custom tags

| Tag | Allowed values |
| --- | --- |
| `device_experience` | `mobile`, `desktop` |
| `entry_route` | `public_landing`, `authenticated_app` |
| `selected_navigation_mode` | `match`, `browse`, `map`, `tour` |
| `visit_type` | `first_time`, `returning` |
| `application_area` | `public`, `authenticated` |

First-time/returning status uses only a local `localStorage` flag. It does not identify a person and is not tied to Yale authentication.

## Available funnels

Phase 2 establishes these funnel foundations:

1. `landing_page_viewed` → `yale_sign_in_clicked` → `app_loaded`
2. `app_loaded` → Match/Browse/Map/Tour navigation → corresponding `*_view_opened` event

The discovery, mentor-profile, scheduling, and full tour funnels will become available after Phase 3 instrumentation.

## Privacy protections

- No Yale NetID, identity claim, name, email address, mentor biography, scheduling URL, or search value is sent.
- Event and tag inputs are normalized to short lowercase tokens.
- Unknown event names, tag names, and tag values are rejected.
- The module does not call Clarity's identity API.
- The module does not reproduce Clarity's built-in dead-click, rage-click, or scrolling measurements.
- No external analytics service was added.

## Browser testing

1. Open browser developer tools and select the Console.
2. Confirm `window.TMACSAnalytics` exposes `initializeAnalytics`, `trackEvent`, and `setAnalyticsTag`.
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
