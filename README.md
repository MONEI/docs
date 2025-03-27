# MONEI Documentation

This repository contains the documentation website for MONEI, built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) version 22.0 or above
- [Yarn](https://yarnpkg.com/) version 4.7.0 or above

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

### Generate API references

#### REST

```bash
yarn genapi:rest
```

This command generates REST API documentation from the `openapi.json` file and outputs it as MDX files in the `docs/apis/rest` folder.

During [production builds](.amplify.yml), the latest version of the OpenAPI file is downloaded with the following command:

```bash
aws s3 cp s3://$JS_BUCKET/api/v1/openapi.json ./openapi.json
```

#### GraphQL

```bash
yarn genapi:graphql
```

This command generates GraphQL API documentation from the `schema.graphql` file and outputs it as MDX files in the `docs/apis/graphql` folder.

During [production builds](.amplify.yml), the latest version of the GraphQL schema is downloaded with the following command:

```bash
yarn rover graph introspect https://graphql.monei.com/ --output schema.graphql
```

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

### Deployment

```bash
yarn deploy
```

This command builds the website and deploys it according to the configuration in your `docusaurus.config.js` file.

## Code Quality

### Prettier

This project uses [Prettier](https://prettier.io/) for code formatting. The formatting is automatically applied to staged files before each commit using [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://typicode.github.io/husky/).

To manually format all files:

```bash
npx prettier --write .
```

### Pre-commit Hooks

Pre-commit hooks are set up using husky and lint-staged to ensure code quality:

- All staged files are automatically formatted with Prettier before each commit

## License

This project is licensed under the MIT License - see the LICENSE file for details.
