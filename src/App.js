import {useState} from 'react';
import SearchBar from './components/searchBar'
const people = [
  {
    id : 'people-01',
    title : 'Juan Perez1'    
  },
  {
    id : 'people-02',
    title : 'Juan Perez2'    
  },
      {
    id : 'people-03',
    title : 'Juan Perez3'    
  },
  {
    id : 'people-04',
    title : 'Juan Perez4'    
  },
  {
    id : 'people-05',
    title : 'Juan Perez5'    
  },
];

const calendar = [
  {
    id : 'calendar-01',
    title : 'Session1'    
  },
  {
    id : 'calendar-02',
    title : 'Session2'    
  },
  {
    id : 'calendar-03',
    title : 'Session3'    
  },
  {
    id : 'calendar-04',
    title : 'Session4'    
  },
  {
    id : 'calendar-05',
    title : 'Session5'    
  }    
];

function App() {
  const [data, setData] = useState([...people, ...calendar]);
  const [selection, setSelection] = useState(null);
  const [currentoption, setCurrentoption] = useState('all');
  const [count, setCount] = useState(0);
  
  const handleClick = (e) => {
    const option = e.target.name;
    switch (option){
      case  'all':
        setData([...people, ...calendar]);
        setCurrentoption('all');
        break;
      case 'people':
        setData([...people]);
        setCurrentoption('people');
      break;  
      case 'calendar':
        setData([...calendar]);
        setCurrentoption('calendar');
      break;          
      default:
      break;
    }
  }

  return (
    <div>
      <button onClick={handleClick} name="all">All</button>
      <button onClick={handleClick} name="people">People</button>
      <button onClick={handleClick} name="calendar">Calendar</button>
      <button onClick={()=> setCount(count+1)}>{count}</button>
      <SearchBar
      items = {data}
      onItemSelected = {() => {}}/>
    </div>
  );
}

export default App;
