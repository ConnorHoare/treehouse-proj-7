import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import Navbar from './components/Navbar';
import Photo from './components/Photo';
import NotFound from './components/NotFound';
import { apiKey } from './config';
import { Route, Routes, Link } from 'react-router-dom';
import Dogs from './components/Dogs';
import Computer from './components/Computer';
import Cats from './components/Cats';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoList from './components/PhotoList';

function App() {
  const flickrAPI = apiKey;

  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d654439ee5896b5c7314645e1c074c44&tags=${images}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setImages(response.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])



  return (
    <div className="App">
      <SearchForm />
      <Navbar />
      <PhotoList data={images} />
      <NotFound />
      <Routes>
        <Route path='/search/:search' element={<Photo />} />
        <Route path='/dogs' element={<Dogs />} />
        <Route path='/computer' element={<Computer />} />
        <Route path='/cats' element={<Cats />} />
      </Routes>
    </div>
  );
}

export default App;
