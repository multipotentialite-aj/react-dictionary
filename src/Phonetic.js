import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div class="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            <i class="fa-solid fa-circle-play">Listen</i>
            </a>
            <span className="text">{props.phonetic.text}</span>
            </div>
    );
}