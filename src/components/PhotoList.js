import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import apiKey from '../config';
import axios from "axios";

const PhotoList = ({ searchTerm }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`

            axios.get(url)
            .then(response => {
                const photos = response.data.photos.photo.map(photo => {
                    return{
                        id: photo.id,
                        url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
                        title: photo.title
                    }
                });
                setPhotos(photos);
            })
            .catch(error => {
                console.log(error)
            })
        } else {
            setPhotos([]);
        }
    }, [searchTerm])



    return (
        <ul>
        {photos && photos.map((photo) => {
            <Photo 
                url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                key={photo.id}
            />
        })} 
        </ul>
    )
}

export default PhotoList