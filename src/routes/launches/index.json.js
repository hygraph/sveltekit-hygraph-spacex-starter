import { graphCmsClient } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export async function get(_req) {
  try {
    const query = gql`
      {
        launches {
          id
          slug
          date
          name
        }
      }
    `
    const { launches } = await graphCmsClient.request(query)

    return {
      status: 200,
      body: {
        launches,
      },
    }
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'A server error occurred',
      },
    }
  }
}

// other HTTP methods
export async function post(request) {}
export async function put(request) {}
export async function del(request) {}
