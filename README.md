# Elevate - HubSpot Default CMS Theme

Elevate is HubSpot's default CMS theme, designed to provide a modern, flexible, and customizable foundation for building beautiful websites on the HubSpot CMS platform.

Because this theme is built using HubSpot's project based theme framework, it does not appear inside of the design manager. This repository is designed to give developers access to the source code so that they can easily customize the theme to suit their needs, use it to create a child theme of Elevate, or just use it as a reference for building custom themes.

## Prerequisites

- [Node.js](https://nodejs.org) (version specified in `.node-version`)
- [HubSpot CLI](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/webwithwin/bodo.git
   cd bodo
   ```

2. Install dependencies:
   ```bash
   npm run npm-install:all
   # or
   yarn yarn-install:all
   ```

3. Install HubSpot CLI
   To install the HubSpot tools globally, in your command line run the command below. To install locally, omit -g from the command.
   ```bash
   npm install -g @hubspot/cli
   ```

4. Authentication
   The following commands enable you to authenticate HubSpot accounts with the CLI so that you can interact with the account. Please refer to this [documentation] for more details: (https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/reference)
   ```bash
   hs account auth
   ```
5. Start the development server:
   ```bash
   npm run npm-start
   # or
   yarn yarn-start
   ```

## Commit and sync local changes to github
1. Make sure sync code to github repository
   ```bash
   git fetch
   ```

2. Switch branch to staging:
   ```bash
   git checkout staging
   ```

3. Commit changed files
   ```bash
   git commit -m 'added new module'
   ```

4. Push changed files to branch in repository
   ```bash
   git push
   ```

## Merge staging branch to main
After you push changed files from your local to staging branch, use pull request in github to merge staging branch to main branch.

## Deploying
Once you push staging to main branch, commits will automatically trigger a new build in HubSpot.

## Available Scripts

TODO

## Project Structure

TODO

## Development

The theme uses HubSpot's local development server for real-time preview of your changes. When you run `npm run start` or `yarn yarn-start`, you can view your changes at the local development URL provided by the CLI.

Learn more about HubSpot CMS:
- [Building with React on Hubspot](https://developers.hubspot.com/docs/guides/cms/react/overview)
- Check the [HubSpot Developer Documentation](https://developers.hubspot.com/)
- Visit the [HubSpot Community](https://community.hubspot.com/)
