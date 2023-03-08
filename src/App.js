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

function App() {

  const flickrAPI = apiKey;

  return (
    <div className="App">
      <SearchForm />
      <Navbar />
      <Photo />
      <NotFound />
      <Routes>
      <Route path='/search/:search' element={<Photo />}/>
        <Route path='/dogs' element={<Dogs />} />
        <Route path='/computer' element={<Computer />} />
        <Route path='/cats' element={<Cats />} />
      </Routes>
    </div>
  );
}

export default App;
