interface Origin {
  name: string
}

export interface Character {
  name: string
  gender: string
  status: string
  image: string
  origin: Origin
  species: string
}
