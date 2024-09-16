import type { CodegenConfig } from '@graphql-codegen/cli';
import CONSTANTS from './config';

const config: CodegenConfig = {
  overwrite: true,
  schema: CONSTANTS.GRAPHQL_API_URL,
  documents: './api/documents/**/*.gql',
  generates: {
    './api/hooks/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-rtk-query'],
      config: {
        importBaseApiFrom: '../../graphql-api-base',
        importBaseApiAlternateName: 'graphql_api',
        exportHooks: false,
      },
    },
  },
};
export default config;
