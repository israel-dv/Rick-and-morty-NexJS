import { gql } from '@apollo/client'

export const CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
        image
        gender
        name
        origin {
          name
        }
        species
        status
      }
    }
  }
`
