# T-MACS Azure Static Web Apps Package

This is the Azure-ready T-MACS website package.

## Azure Static Web Apps deployment settings

- App location: `/`
- API location: `api`
- Output location: leave blank

## Required Azure environment variables

Set these in the Azure Static Web App configuration:

- `SITE_URL` = your Azure Static Web Apps URL, for example `https://<your-site>.azurestaticapps.net`
- `CAS_SESSION_SECRET` = a long random secret string

Optional overrides are already set to Yale defaults:

- `CAS_LOGIN_URL` = `https://secure.its.yale.edu/cas/login`
- `CAS_VALIDATE_URL` = `https://secure.its.yale.edu/cas/serviceValidate`
- `CAS_LOGOUT_URL` = `https://secure.its.yale.edu/cas/logout`

## CAS callback URL

Once Azure gives you the website URL, the CAS service/callback URL is:

`https://<your-site>.azurestaticapps.net/cas-callback`

