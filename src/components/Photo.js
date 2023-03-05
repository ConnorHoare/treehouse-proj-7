import React from "react";

const Photo = (props) => {
    return (
        <ul>
            <li>
                <img src={props.src}></img>
            </li>
        </ul>
    )
}

export default Photo