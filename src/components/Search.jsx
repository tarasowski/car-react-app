import { useState } from "react"

function Search({ setResults }) {
    const [search, setSearch] = useState("")
    console.log("my search component wird geladen")

    function handleSearchChange(event) {
        const value = event.target.value
        setSearch(value)
    }

    async function handleSearchButton() {
        const myEndpoint = "https://freetestapi.com/api/v1/cars?search="
        const response = await fetch(myEndpoint + search) // hiermit schicken wir ein GET request an die URL
        const data = await response.json()
        setResults(data)
        console.log(data)
    }

    return (
        <div>
            <input type="text" value={search} onChange={handleSearchChange} placeholder="Please input a car model" />
            <button onClick={handleSearchButton}>Suchen</button>
        </div>
    )
}

export default Search