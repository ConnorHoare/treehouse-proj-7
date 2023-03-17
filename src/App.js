import logo from './logo.svg';
import './App.css';
import apiKey from './config';
import SearchForm from './components/SearchForm';
import Navbar from './components/Navbar';
import Photo from './components/Photo';
import NotFound from './components/NotFound';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  function search(searchTerm) {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d654439ee5896b5c7314645e1c074c44&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (searchTerm === 'cats') {
          setCats(response.data.photos.photo);
        } else if (searchTerm === 'dogs') {
          setDogs(response.data.photos.photo);
        } else if (searchTerm === 'computers') {
          setComputers(response.data.photos.photo);
        } else {
          setSearchTerm(response.data.photos.photo);
        }
      })
      .catch(error => {
        console.log(error)
      })

      return
  }

  useEffect(() => {
    search('cats');
    search('dogs');
    search('computers');
    search(searchTerm)
  }, [searchTerm])

  // Make the images appear when the search form is submitted or one of the nav links is pressed


  return (
    <div className="App">
      <SearchForm onSubmit={handleSearch} />
      <Navbar />
      <PhotoList searchTerm={searchTerm} />
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
