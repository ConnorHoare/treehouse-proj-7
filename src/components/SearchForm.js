import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
    const search = useRef();
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        let searchTerm = search.current.value;
        let path = `/search/${searchTerm}`;
        navigate(path)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="search"
                ref={search}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm