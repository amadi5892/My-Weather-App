import Card from "./components/card/card.component";

import { useState, useEffect } from 'react';

import './app.styles.css';
function App() {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=40.730610&lon=-73.935242&appid=a76dba64d19fccda93b110d929b0d271').then(response => response.json()).then((data) => setData(data)
    );
  }, []);  

  return (
    <div className='container' >
      <Card data={data} />
    </div>
  );
}

export default App;
