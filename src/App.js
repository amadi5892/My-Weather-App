import Card from "./components/card/card.component";
import SearchBox from "./components/search-box/search-box.component";

import { useState } from 'react';

import './app.styles.css';
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a76dba64d19fccda93b110d929b0d271`

  const onKeyPressHandler = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data);
      })
      setSearch('')
    }
  };

  const onChangeHandler = (event) => {
    const searchString = event.target.value;
    setSearch(searchString);
  };

  return (
    <div className='container' >
      <SearchBox onChangeHanlder={onChangeHandler} onKeyPressHandler={onKeyPressHandler}/>
      <Card data={data} value={search} />
    </div>
  );
}

export default App;
