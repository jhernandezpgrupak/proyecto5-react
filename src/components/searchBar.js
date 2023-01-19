import  {useState, useEffect} from 'react';
import Results from './results'

function SearchBar({items, onItemSelected}){

	const [query, setQuery] = useState(''); //manejar el conjunto de datos
	const [result, setResult] = useState([]); //manejar los resultados

	const handleChange = (e) => {
		const value = e.target.value;
		setQuery(value);
	}
	
	const handleResult = (result)=>{
		setResult(result)
	}
	
	const handleItemSelected = ()=>{

	}

	return (<div>
				{result && <div>{result.length} results</div>}
				<input  type="text" onChange={handleChange} value={query}/>
				<Results
				items = {items}
				onItemSelected = {handleItemSelected}
				query = {query}
				onResultCalculated = {handleResult}
				/>
			</div>);
}

export default SearchBar;