# Manual steps

While our infra provisioning will be fully-automated to the greatest extent possible, there are some manual steps that we're still trying to automate.

## Pre Deployment

These are the sources files that we have to manually patch (with environment suffix) before deployment:

* `src\ContosoTraders.Ui.Website\src\services\configService.js`

## Post Deployment For Local Development

Add user's IP address to the firewall rules for the SQL Server instance. This is required for allowing:

* The developer to connect to the database via SMSS (or some other GUI/CLI tool).
* The locally running app to connect to the database.
