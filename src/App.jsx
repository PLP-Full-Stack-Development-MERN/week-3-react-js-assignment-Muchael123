import {  useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Counter from './components/Counter'


function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "",
    email: ""
  })
  const Add =  ()=>{
    setCount(prev => prev+1);
  }
  const Subtract =  ()=>{
    setCount(prev => prev-1);
  }
  return (
    <div className='w-full h-[100vh] rounded-md bg-gray-100 flex flex-col'>
      <Header name={user.name}/>
      <div className='w-full flex flex-col justify-center items-center'>
      <Profile setUser={setUser} user={user} />
      <p>Welcome {user.name}</p>
      <p>Your email is <span className='text-green-500'>{user.email}</span></p>
      <div className='w-fit shadow-md bg-white items-center flex flex-col mt-3'>
      <Counter onnext={Add} onprev={Subtract}  />
        <h1 className='text-lg text-gray-500 font-semibold'> we are at <span className='text-green-500'>{count}</span></h1>
        <p>
        {count % 10 === 0 && count !== 0 ? `Hello ${user.name}, You reached ${count}`: null}
        </p>
      </div>
      </div>
  </div>
  )
}

export default App
