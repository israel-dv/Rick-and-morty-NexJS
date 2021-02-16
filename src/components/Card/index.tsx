import React from 'react'

export const Card: React.FC = () => {
  return (
    <div className="bg-pink-950 flex h-44 w-96 m-5 overflow-hidden rounded-md shadow relative text-white">
      <div className="flex h-full bg-red-850 flex-2-1">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="logo"
        />
      </div>
      <div className="flex flex-col h-full bg-gray-800 flex-3-1 px-5 py-2">
        <div className="flex flex-col">
          <span className="text-lg">Rick Sanchez</span>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <label className="pl-2 text-sm">Alive - Human</label>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <div className="flex flex-col py-2">
            <span className="text-gray-400 text-xs">Gender</span>
            <span className="text-sm text-white">Male</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs">Origin</span>
            <span className="text-sm text-white">Eartch</span>
          </div>
        </div>
      </div>
    </div>
  )
}
