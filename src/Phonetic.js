import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div class="Phonetic">
            <a href={props.phonetic.audio} target="_blank">
            <i class="fa-solid fa-circle-play">Listen</i>
            </a>
            <br />
            {props.phonetic.text}
            </div>
    );
}