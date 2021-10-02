import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index) {
            return (
            <div key={index}>
                <p><strong>{definition.definition}</strong></p>
                <p>Example sentence: {definition.example}</p>
                <Synonyms synonyms={definition.synonyms} />
                </div>
                );
            })}
        </div>
    );
}