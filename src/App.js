import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import Navbar from './components/Navbar';
import Photo from './components/Photo';
import NotFound from './components/NotFound';
import { apiKey } from './config';

function App() {

  const flickrAPI = apiKey;

  return (
    <div className="App">
        <SearchForm />
        <Navbar />
        <Photo />
        <NotFound />
    </div>
  );
}

export default App;
