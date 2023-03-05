import React from "react";
import { useState } from "react";

const SearchForm = () => {
    const [searchTerm, setSearhTerm] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchTerm)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="search"
                value={searchTerm}
                onChange={(e) => setSearhTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm