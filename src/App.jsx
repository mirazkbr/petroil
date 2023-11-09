import { useState } from 'react'

import './App.css'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Supply from './Components/Supply/Supply'
import Service from './Components/Service/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contact></Contact>
      <Header></Header>
      <Banner></Banner>
      <Supply></Supply>
      <Service></Service>
    </>
  )
}

export default App
