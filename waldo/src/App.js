import './App.css';
import axios from 'axios';
import Photo from "./components/Photo";
import { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Clock from './components/Clock';
import Scoreboard from './components/Scoreboard';

const API_URL = "http://localhost:3000/api/v1/characters";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [characters, setCharacters] = useState([]);
  const [waldo1, setWaldo1] = useState("red");
  const [waldo2, setWaldo2] = useState("red");
  const [waldo3, setWaldo3] = useState("red");

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setCharacters(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const gameOver = () => {
    // Check if all waldos have been found
    if (waldo1 === "green" && waldo2 === "green" && waldo3 === "green") {
      console.log("game over");
    }
  }

  const updateCharacter = (characterIndex) => {
    // Set appropriate waldo's found to green
    if (characterIndex === 0) {
      setWaldo1("green");
    } else if (characterIndex === 1) {
      setWaldo2("green");
    } else if (characterIndex === 2) {
      setWaldo3("green");
    }
  }

  useEffect(() => {
    gameOver(); // This will be executed when the state changes
  });

  return (
    <div className="App">
      <h1>Where's waldo</h1>
      <div className="topBar">
        <Characters waldo1={waldo1} waldo2={waldo2} waldo3={waldo3}/>
        <Clock/>
      </div>
      <Photo characters={characters} updateCharacter={updateCharacter}/>
      <Scoreboard/>
    </div>
  );
}

export default App;
