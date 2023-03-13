import React from "react";
import Photo from "./Photo";

const PhotoList = (props) => {
    const results = props.dataResults;
    const cats = props.dataCats;
    const dogs = props.dataDogs;
    const computers = props.dataComputers;

    return (
        <ul>
            <Photo />
        </ul>
    )
}

export default PhotoList