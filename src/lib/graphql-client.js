import { GraphQLClient } from 'graphql-request'

export const graphCmsClient = new GraphQLClient(
  import.meta.env.VITE_GRAPHCMS_ENDPOINT,
  {
    headers: {},
  }
)
