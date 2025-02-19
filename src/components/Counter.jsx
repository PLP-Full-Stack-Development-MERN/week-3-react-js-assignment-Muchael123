import React from 'react'

function Counter({onprev, onnext}) {
  return (
    <div className='p-3 flex flex-row justify-center gap-20'>
      <button className='bg-blue-500 text-white shadow-lg text-lg hover:bg-blue-400 py-2 px-4 rounded-md' onClick={onprev}>prev</button>
      <button className='bg-blue-500 text-white shadow-lg text-lg hover:bg-blue-400 py-2 px-4 rounded-md' onClick={onnext}>next</button>
    </div>
  )
}

export default Counter