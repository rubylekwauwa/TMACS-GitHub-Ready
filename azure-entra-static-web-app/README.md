# T-MACS Azure Static Web Apps with Yale Entra Auth

This package incorporates the Entra authentication pattern from the Yale ITS template.

## Structure

- `src/index.html`: public landing page. Desktop users are sent to Yale Entra sign-in before the mentor app loads. Mobile users see the landing/hero first and sign in when they choose Match, Browse, or Tour.
- `src/app/`: protected T-MACS mentor app and assets.
- `src/staticwebapp.config.json`: route protection and Yale Entra configuration.
- `api/GetRoles`: optional template role hook. The current auth config does not depend on it for basic Yale sign-in.

## Azure Static Web Apps deployment settings

- App location: `/src`
- API location: leave blank for the simplified sign-in-only configuration
- Output location: leave blank or `/`

## Yale Entra values

Yale ITS provided these values:

- Directory ID / tenant ID: `dd8cbebb-2139-4df8-b411-4e3e87abeb5c`
- Client ID: `b5361b9b-a47a-4828-a953-74cfda2a8ea0`
- Callback URL: `https://tmacsmentornetwork.yale.edu/.auth/login/aad/callback`

The tenant ID is already set in `src/staticwebapp.config.json` as the Entra issuer.

## Azure application settings

Current mode: managed Microsoft Entra auth. No client ID or client secret app settings are required for this fallback configuration.

Future/custom mode: if Yale ITS later re-enables tenant-restricted custom auth, use the Yale-provided client ID and secret in Azure Static Web Apps application settings. Do not commit the client secret into this repository.

## Auth behavior

- Public landing page: `/`
- Protected mentor app: `/app/`
- Login route: `/.auth/login/aad`
- Logout route: `/logout`
- Entra callback route: `/.auth/login/aad/callback`

## Troubleshooting

If sign-in fails, check these first:

- The Static Web App must be on the Standard plan for custom Entra authentication.
- The deployed app location must point at this package's `src` folder. If deploying from the repository root, use `/azure-entra-static-web-app/src`.
- In the current managed-auth fallback, no Entra client secret is required.
- If custom auth is reintroduced later, the Entra app registration must include this redirect URI exactly: `https://tmacsmentornetwork.yale.edu/.auth/login/aad/callback`.
- After changing app settings or auth config, redeploy or restart the Static Web App before testing again.


## Duo loop note

If Yale sign-in reaches Duo and then returns to the sign-in page, the Microsoft/Yale side is authenticating but Azure Static Web Apps is not establishing its final app session. Check that the Static Web App is on the Standard plan, the custom auth config has redeployed, `AZURE_CLIENT_SECRET` is current, and the Entra redirect URI is configured as a Web redirect URI.

## Auth check page

After Yale sign-in, the landing page now sends users through `/auth-check.html` before opening `/app/`. This confirms whether Azure Static Web Apps created a `clientPrincipal` session via `/.auth/me`. If Duo succeeds but this page says sign-in did not complete, the issue is in Azure Static Web Apps auth/session configuration rather than the TMACS front-end.


## Auth endpoint 404 note

If `https://tmacsmentornetwork.yale.edu/.auth/login/aad` shows an Azure `404: Not Found`, the request is not reaching Azure Static Web Apps authentication. Check that `tmacsmentornetwork.yale.edu` is mapped to the Azure Static Web App resource, not an Azure Storage Static Website, and test the Static Web Apps default `*.azurestaticapps.net` URL directly. Also confirm the Static Web App is on the Standard plan and the deployed workflow is using `app_location: "azure-entra-static-web-app/src"`.

## Managed auth fallback

The current `staticwebapp.config.json` intentionally uses Azure Static Web Apps managed Microsoft Entra auth and does not include a custom `auth.identityProviders` block. This should make `/.auth/login/aad` available on all Static Web Apps plans. Once the built-in auth route works, Yale ITS can decide whether tenant-restricted custom auth is still required; custom auth requires the Standard plan.
