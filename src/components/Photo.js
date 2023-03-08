import React from "react";
import { useParams } from "react-router-dom";

const Photo = (props) => {
    let { search } = useParams();
    return (
        <ul>
            <li>
                <img src={props.src}></img>
            </li>
        </ul>
    )
}

export default Photo