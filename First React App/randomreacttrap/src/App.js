import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [Info, setInfo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2023-01')

      const iframeLocation = document.getElementById("CrimeLocation")

      const Result = await result.json()

      setInfo(Result)
    }

    fetchData()
  }, [])

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div class="Display Info">
      <h2>Information: </h2>
      {Info.map(Crime =>
        <div class="CrimeTable">
          <p>{Crime.category}</p>
          <p>{Crime.location_type}</p>
          <div>
            Lat: {Crime.location.latitude} Long:{Crime.location.longitude}
            {/* <iframe id="CrimeLocation" height="200px" width="100%" src="https://maps.google.com/maps?q=$52.627433,$-1.137632&hl=es;&output=embed"></iframe> */}
          </div>
        </div>)}
    </div>
  );
}

export default App;