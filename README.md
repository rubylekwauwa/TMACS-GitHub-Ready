# T-MACS Azure Static Website Package

This is the static Azure-ready T-MACS website package.

## Deploying to Azure Storage Static Website

Upload the public site files in this folder to the `$web` container for your Azure Storage account.

Required entry point:

- `index.html`

Static assets used by the site:

- `app.js`
- `styles.css`
- `mobile-app.js`
- `mobile-home.js`
- `mobile-home.css`
- `mobile.css`
- `guillermo-valdes.png`
- `welcome-tour.mp3`

## Authentication

The CAS/Azure Functions backend has been removed from this package. This version is intended to run as a plain static website.
