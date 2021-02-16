import { useQuery } from '@apollo/client'
import React from 'react'
import { CHARACTERS_QUERY } from '../api/characters/characters'

import { Card } from '../components/Card'

export default function Home() {
  const { data: charactersFromData, loading } = useQuery(CHARACTERS_QUERY)
  const [characters, setCharacters] = React.useState(() => [])

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
    </>
  )
}
