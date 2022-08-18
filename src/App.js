import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Astronaut from './Components/Astronaut';

function App() {

  const [personeSpazio, setPersoneSpazio] = useState([])

  useEffect(() => {
    Axios.get("http://api.open-notify.org/astros.json").then((res) =>{
    setPersoneSpazio(res.data.people)
  })
  }, []);
  


  return (
    <div className="App mx-auto">
      <h1 className='my-4 text-3xl font-medium'>Persone nello spazio</h1>
      <div className='max-w-xs grid grid-cols-1 gap-4 mx-auto md:grid-cols-5 md:container'>
      {
        personeSpazio.map((person, index) => (
          <Astronaut
           key={index}
           name={person.name}
          />
        ))
      }
      </div>
    </div>
  );
}

export default App;
