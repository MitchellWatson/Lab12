import React from 'react'
import Pokemon from './pokemon'
function page({ currentPokemons, currentPage }) {
  return (
    <div>
      <h1>
        Page number {currentPage}
      </h1>
      <div className="pokemon">
        {
          currentPokemons.map(item => {
            return <Pokemon pokemon={item} />
          })
        }
      </div>
    </div>
  )
}

export default page