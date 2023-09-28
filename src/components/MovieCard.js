import React from 'react'

const MovieCard = ({poster}) => {
    
  return (
    <div className='mr-2'>
        <img className='w-[150px] max-w-fit' alt='poster' src={`https://image.tmdb.org/t/p/w500${poster}`}/>
    </div>
  )
}   

export default MovieCard