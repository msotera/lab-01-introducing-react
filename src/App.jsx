import React from 'react';
import Greeting from './component/Greeting/Greeting.jsx';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () =>{
  const [name, setName] = useState("");


  return(
    <div>
      <input onChange={({target: {value}}) => setName(value)} placeholder="Plz type your name here"/>
      <Greeting name={name}/>
    </div>
  );
}
 
export default App;