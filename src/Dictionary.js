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
    let pexelsApiKey = "563492ad6f917000010000018d5d6562c00341a2a0e39a89cee8ef16";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }
    function handleSubmit(event) {
        event.preventDefault();
        search();
  }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    if (loaded) {
    return (
    <div className="Dictionary">
        <section>
        <form onSubmit={search}>
            <input type="search" placeholder="Synaesthesia"
            onChange={handleKeywordChange} />
            <span className="btn btn-light ms-3"
            onClick={handleKeywordChange}>Search</span>
            </form>
            <div className="Hint">
                Suggested words: compendium, savant, lugubrious, bleak...
            </div>
            </section>
        <Results results={results} />
    </div>
    )
}