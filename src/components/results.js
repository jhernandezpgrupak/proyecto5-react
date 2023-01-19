import {useState, useMemo, useEffect} from 'react';
import MarkeItem from './markedItem';
function Results({items, onItemSelected, query, onResultCalculated}){ //elementos, metodo, texto a buscar, numero de busqueda(metodo)

	const [result, setResult] = useState([]);
	const filteredItems = useMemo(() => findMatch(items, query),[items, query]);
	
	useEffect(() =>{
		onResultCalculated(result)
	});

	function findMatch(items, query){
		const res = items.filter(i =>{
			return i.title.indexOf(query)>=0 && query.length>0;
		});
		setResult(res);
		return res;
	}
	return <div>
			{
				query !== '' ? filteredItems.map((item) => <MarkeItem key={item.id} item={item} query={query} onClick={onItemSelected}/>) : ''
			}
		</div>
}
export default Results;