import './App.css';
import axios from 'axios';
import Photo from "./components/Photo";
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/photos";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPhoto(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Photo photo={photo}/>
    </div>
  );
}

export default App;
