import { useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Counter from './components/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-[100vh] bg-gray-100'>
      <Header/>
      <Profile/>
      <Counter/>
  </div>
  )
}

export default App
