# Cypress End-to-End Tests

## Running the Example App

`npm start`

You'll need the app started before you open or run Cypress

## Opening Cypress

`make cypress-open`

## Running Cypress (Headless)

`make cypress-run`

If you wish to run with recording capabilities, then run `make-cypress-run-record`

## Cypress Dashboard

Instructions for having your headless, recorded runs report to you online Cypress dashboard:

1. Sign-up and create a project on your [Cypress dashboard](https://www.cypress.io/dashboard/)
2. Once you have a project, you should be able to replace the `projectId` in `cypress.json` with your project's ID. 
3. Copy your project's key and export it as an env variable in the terminal where you're planning to run your Cypress 
   tests e.g. `export CYPRESS_KEY=<your-key> && npm run cypress:run-record`. 
   You can also do this with the `cypress-run-record` make target, but the env var might not show up properly - 
   I haven't tested that 🤷