import React from 'react'

const Banner = ({title, desc,image}) => {
  return (
    <div className='flex py-2 px-30 my-4 shadow-lg justify-between items-center w-full'>
      <div className='max-w-80'>
        <h1 className='text-indigo-700 text-2xl font-black mb-2'>{title}</h1>
        <p>{desc}</p>
      </div>
      <div>
        <img className='w-50' src={image} alt="image"/>
      </div>
    </div>
  )
}

export default Banner