import { faCircleExclamation, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-44 px-12 absolute w-screen aspect-video text-white bg-gradient-to-t from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='w-1/3'>{overview}</p>
      <div className='pt-2 text-lg'>
        <button className='bg-white w-36 p-1.5 font-semibold rounded-sm text-black hover:opacity-50'><FontAwesomeIcon icon={faPlay} className='mr-2'/>  Play</button>
        <button className='bg-gray-600 w-36 p-1.5 mx-2 text-white font-semibold rounded-sm opacity-70'><FontAwesomeIcon icon={faCircleExclamation} className='mr-2'/> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle