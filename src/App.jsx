import { useState } from 'react'

import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import Input from './components/Input'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Header/>
    <Login/>
  </>
  )
}

export default App
