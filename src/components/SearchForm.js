import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('');
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(searchTerm)
        let path = `/search/${searchTerm}`;
        navigate(path)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm