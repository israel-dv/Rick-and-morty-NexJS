import React from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'

import ChevronRight from '../assets/icons/chevron-right.svg'
import ChevronLeft from '../assets/icons/chevron-left.svg'
import { Card } from '../components/Card'
import { CHARACTERS_QUERY } from '../api/characters/characters'

const INIT_PAGE = 1
const END_PAGE = 34

export default function Home() {
  const [characters, setCharacters] = React.useState(() => [])
  const [page, setPage] = React.useState(() => INIT_PAGE)
  const [getCharacters, { data: charactersFromData, loading }] = useLazyQuery(
    CHARACTERS_QUERY,
  )

  React.useEffect(() => {
    getCharacters({ variables: { page: page } })
  }, [page])

  React.useEffect(() => {
    if (charactersFromData) {
      setCharacters(charactersFromData.characters.results)
    }
  }, [charactersFromData])

  return (
    <>
      {characters.map((character, index) => (
        <Card character={character} key={`${character['name'] + index}`} />
      ))}
      {page > INIT_PAGE && (
        <button
          className="flex items-center justify-center h-14 w-14 rounded-full bg-pink-650 absolute bottom-10 left-10 shadow-lg hover:opacity-90 cursor-pointer"
          onClick={() => setPage(page - 1)}
        >
          <ChevronLeft />
        </button>
      )}
      {page < END_PAGE && (
        <button
          className="flex items-center justify-center h-14 w-14 rounded-full bg-pink-650 absolute bottom-10 right-10 shadow-lg hover:opacity-90 cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <ChevronRight />
        </button>
      )}
    </>
  )
}
