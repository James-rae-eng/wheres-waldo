import './App.css';
import axios from 'axios';
import Photo from "./components/Photo";
import { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Clock from './components/Clock';
import Scoreboard from './components/Scoreboard';

const API_URL = "http://localhost:3000/api/v1/characters";
const API_USERS = "http://localhost:3000/api/v1/users";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function getAPIUsers() {
  return axios.get(API_USERS).then((response) => response.data)
}

function App() {
  const [characters, setCharacters] = useState([]);
  const [waldo1, setWaldo1] = useState("red");
  const [waldo2, setWaldo2] = useState("red");
  const [waldo3, setWaldo3] = useState("red");
  const [formShow, setFormshow] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [users, setUsers] = useState([]);

  // Get the character coordinate data
  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setCharacters(items);
      }
    });
    return () => (mounted = false);
  }, []);

  // Get the users scoreboard data
  useEffect(() => {
    let mounted = true;
    getAPIUsers().then((items) => {
      if (mounted) {
        setUsers(items);
      }
    });
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    gameOver(); // This will be executed when the state changes
  });

  useEffect(() => {
    if (formShow === false) {
      let interval = setInterval(() => {
        setElapsedTime(lastTimerCount => lastTimerCount + 1)
      }, 1000) //each count lasts for a second
      //cleanup the interval on complete
      return () => clearInterval(interval)
    }
  }, [formShow]);

  const gameOver = () => {
    // Check if all waldos have been found
    if (waldo1 === "green" && waldo2 === "green" && waldo3 === "green") {
      setFormshow(true);
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

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form name and final elapsed time
    const name = e.target.name.value;
    const time = Number(e.target.time.value);
    // Send the values to the database
    const userRecord = {
      name: name,
      timeRecord: time
    };

    axios.post(API_USERS, userRecord).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    })
  
    // Hide input form & reset edit state
    setFormshow(false);

    // Reset characters
    setWaldo1("red");
    setWaldo2("red");
    setWaldo3("red");
  }

  return (
    <div className="App">
      <h1>Where's waldo</h1>
      <div className="topBar">
        <Characters waldo1={waldo1} waldo2={waldo2} waldo3={waldo3}/>
        <Clock elapsedTime={elapsedTime}/>
      </div>
      { formShow ?
          <div>
            <h2>Game over! Add your name to the Scoreboard below</h2>
            <form method="post" onSubmit={handleSubmit}>
                <label>
                  Name: <input name="name"/>
                </label>
                <label>
                  Final time (s): {elapsedTime} <input type="HIDDEN" name="time" value={elapsedTime} readOnly={true}/>
                </label>
              <button type="submit">submit</button>
            </form>
          </div>
        : null
      }
      <Photo characters={characters} updateCharacter={updateCharacter}/>
      <Scoreboard users={users}/>
    </div>
  );
}

export default App;
