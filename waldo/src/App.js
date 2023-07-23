import './App.css';
import axios from 'axios';
import Photo from "./components/Photo";
import { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Clock from './components/Clock';
import Scoreboard from './components/Scoreboard';

const API_URL = "http://localhost:3000/api/v1/photos";

/*function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}*/

function App() {
  const [photo, setPhoto] = useState([]);

  /*useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPhoto(items);
      }
    });
    return () => (mounted = false);
  }, []);*/

  return (
    <div className="App">
      <h1>Where's waldo</h1>
      <div className="topBar">
        <Characters/>
        <Clock/>
      </div>
      <Photo photo={photo}/>
      <Scoreboard/>
    </div>
  );
}

export default App;
