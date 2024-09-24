import { useState, useEffect } from 'react'
import Search from "./components/Search"
import CarProfile from "./components/CarProfile"
import AllCars from './components/AllCars'


function App() {
  const [results, setResults] = useState([])
  console.log("app component wird geladen")

  return (
    <>
      <Search setResults={setResults} />
      <CarProfile results={results} />
      <AllCars />
    </>
  )
}

export default App
