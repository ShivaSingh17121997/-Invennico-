import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages.jsx/Home'
import FormPage from './Pages.jsx/FormPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      < FormPage/>
    </>
  )
}

export default App
