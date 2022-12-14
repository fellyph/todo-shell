import { useEffect, useState, useRef } from 'react';
import './App.css';
import User from './interfaces/User';
import ListData from './components/ListData';

function App() {

  const [dataList, setDataList] = useState([])
  const [filteredDatalist, setFilteredDataList] = useState([]);

  const inputSearch = useRef<HTMLInputElement>(null);
  
  // fetch mounted 
  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(res => console.log(res))
      .catch(error => console.log('error', error));
  }, [])

  const searchData = () => {
    const filteredData = dataList.filter((item: User ) => {
      const inputValue:string = (inputSearch.current) ? inputSearch.current?.value as string : '';
      return item.userName.includes(inputValue);
    });
 
    setFilteredDataList(filteredData);
  }  


  return (
    <div className="App">
      <header>
        <h2>Select your team</h2>
        <label>Search: <input name="filter" className='input-search' ref={inputSearch} /></label>
        <button className='btn-clear'>Clear</button>
      </header>

      <div className="dataLists">
        <ListData data={filteredDatalist}/>
      </div>
      
    </div>
  )
}

export default App
