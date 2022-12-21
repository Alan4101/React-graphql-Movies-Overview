import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000',
  documents: 'src/**/*.tsx',
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      config: {
        withHooks: true
      }
    }
  }
}

export default config
