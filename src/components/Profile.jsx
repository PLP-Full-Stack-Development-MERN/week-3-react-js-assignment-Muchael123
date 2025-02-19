import React from 'react'

function Profile({setUser, user}) {
  return (
    <div className='w-full my-4 flex flex-col justify-center p-4'>
      <div className='flex flex-col'>
        <p className='text-center text-2xl font-bold tracking-wide'>User Data</p>
       <div className='gap-2 flex items-center'>
        <label htmlFor="user">User name:</label>
       <input value={user.name} onChange={(e) => setUser({...user, name : e.target.value})} type="text" className='bg-gray-200 outline-1 outline-blue-200 px-3 py-2 rounded-md max-w-[200px] ' />
       </div>
       <div className='gap-2 flex items-center mt-3'>
        <label htmlFor="email">User Email:</label>
       <input type="email" value={user.email} onChange={(e) => setUser({...user, email : e.target.value})} className='bg-gray-200 outline-1 outline-blue-200 px-3 py-2 rounded-md max-w-[200px] ' />
       </div>
      </div>
    </div>
  )
}

export default Profile