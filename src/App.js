import React, { useState , useEffect} from "react";
import './App.css';
import ListOfSpaceXLaunches from './components/molecules/ListOfSpaceXLaunches';



function App() {

  const [spacexData,setSpacexData] =useState([]);

  const getSpacexData = async () => {
    const response = await fetch('https://api.spacexdata.com/latest/launches');
    const data= await response.json();
    setSpacexData(data);
  }

  useEffect(() =>{
    getSpacexData();
  }, []);


  

  return (
    <div className="App">
      <h1>Upcoming SpaceX Launches</h1>
     
      <ListOfSpaceXLaunches spacexData={spacexData}/>
    </div>
  );
}

export default App;
