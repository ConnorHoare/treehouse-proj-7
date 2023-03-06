import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import Navbar from './components/Navbar';
import Photo from './components/Photo';
import NotFound from './components/NotFound';
import { apiKey } from './config';
import { Route, Routes, Link } from 'react-router-dom';
import Dogs from './components/Dogs';

function App() {

  const flickrAPI = apiKey;

  return (
    <div className="App">
      <SearchForm />
      <Navbar />
      <Photo />
      <NotFound />
      <Routes>
        <Route path='/dogs' element={<Dogs />} />
      </Routes>
    </div>
  );
}

export default App;
