import React from 'react'

const Ping = () => {
  return (
    <div className='relative '>
      <div className="h-3 w-3 absolute -left-4 top-5">
        <span className='h-3 w-3 absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75'>
        </span>
        <span className='absolute inline-flex h-3 w-3 rounded-full bg-primary'></span>
      </div>
      
    </div>
  )
}

export default Ping

