import React, { useState } from "react";
import axios from "axios";
import Results from "./Results"
import "./Dictionary.css";
import Photos from "./Photos"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/e
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
    
    let pexelsApiKey = "563492ad6f917000010000018d5d6562c00341a2a0e39a89cee8ef16";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
    

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <section>
        <form onSubmit={search}>
            <input type="search" placeholder="Synaesthesia"
            onChange={handleKeywordChange} />
            </form>
            <div className="Hint">
                Suggested words: desolate, void, lugubrious, bleak...
            </div>
            </section>
        <Results results={results} />
        <Photos photos={photos} />
    </div>
    )
}