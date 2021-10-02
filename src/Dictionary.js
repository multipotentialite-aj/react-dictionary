import React, { useState } from "react";
import axios from "axios";
import Results from "./Results"
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/e
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <section>
        <form onSubmit={search}>
            <input type="search"
            onChange={handleKeywordChange} />
            <span className="btn btn-light ms-3"
            onClick={handleKeywordChange}>Search</span>
            </form>
            <div className="Hint">
                Suggested words: Synesthesia, lugubrious, bleak...
            </div>
            </section>
            <section>
        <Results results={results} />
        </section>
    </div>
    )
}