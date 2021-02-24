import React from 'react'

import { Character } from '../../utils/interface/character'

interface CardProps {
  character?: Character
}

export const Card: React.FC<CardProps> = ({ character }: CardProps) => {
  return (
    <div className="bg-gray-850 hover:bg-gray-650 flex h-44 w-96 m-5 overflow-hidden rounded-md shadow-lg relative text-white cursor-pointer">
      <div className="flex h-full bg-red-850 flex-2-1">
        <img src={character.image} alt="logo" />
      </div>
      <div className="flex flex-col h-full flex-3-1 px-5 py-2">
        <div className="flex flex-col">
          <span className="text-lg">{character.name}</span>
          <div className="flex items-center">
            <div
              className={`h-2 w-2 rounded-full ${
                character.status === 'Alive'
                  ? 'bg-green-500'
                  : character.status === 'Dead'
                  ? 'bg-red-600'
                  : 'bg-gray-400'
              }`}
            ></div>
            <label className="pl-2 text-sm">{`${character.status} - ${character.species}`}</label>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <div className="flex flex-col py-2">
            <span className="text-gray-400 text-xs">Gender</span>
            <span className="text-sm text-white">{character.gender}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs">Origin</span>
            <span className="text-sm text-white">{character.origin.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
