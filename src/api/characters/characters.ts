import { gql } from '@apollo/client'

export const CHARACTERS_QUERY = gql`
  query Characters($page: Int) {
    characters(page: $page) {
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
