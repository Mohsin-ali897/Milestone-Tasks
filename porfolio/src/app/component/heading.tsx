import React from 'react'

const Heading = ({title}:any) => {
  return (
    <div className='text-center pb-8'>
        <p className='text-6xl my-6 font-bold'>{title}</p>
    </div>
  )
}

export default Heading