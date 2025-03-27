// This script cleans the generated md files from the GraphQL API docs plugin

const fs = require('fs');
const path = require('path');

const graphqlDir = path.join(__dirname, '../docs/apis/graphql');

fs.readdirSync(graphqlDir).forEach((file) => {
  if (file !== 'index.md') {
    const filePath = path.join(graphqlDir, file);
    fs.rmSync(filePath, {recursive: true, force: true});
  }
});
