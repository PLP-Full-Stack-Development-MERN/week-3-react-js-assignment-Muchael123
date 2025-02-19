import React from 'react'

function Header({name}) {
  return (
    <div className='w-full text-white py-3 px-5 bg-blue-500 justify-between flex'>
      <p className='text-xl font-semibold'> {"<"}<span className='text-gray-200'>Hello</span>{" "}{name || "Maich"}{"/>"}</p>
      <div className='flex gap-3'>
        <a href='#' className='hover:text-gray-200'>home</a>
        <a href='#' className='hover:text-gray-200'>about</a>
        <a href='#' className='hover:text-gray-200'>contact</a>
      </div>
    </div>
  )
}

export default Header