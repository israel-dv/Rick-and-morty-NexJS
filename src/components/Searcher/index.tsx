import React from 'react'

export const Searcher = () => {
  return (
    <div className="relative mr-6 my-2">
      <input
        type="search"
        className="bg-gray-750 shadow rounded border-0 p-3 text-white text-sm w-72"
        placeholder="Doesn't work. API don't support a filter"
      />
    </div>
  )
}
