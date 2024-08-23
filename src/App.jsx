import { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false)
    }, 12000)

  
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <Header/>
          <Login/>
        </>
      )}
    </>
  )
}

export default App
