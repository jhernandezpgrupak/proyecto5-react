import { useMemo } from "react"

function MarkeItem({item, query, onItemSelected}){
    const getPosition = (item, query)=>{
        const index = item.title.indexOf(query); //tomar indice
        //dividir la longitud del texto en tres partes
        const left = item.title.slice(0, index); // extrear los caracteres antes del query

        const right = item.title.slice(index+query.length); // extraer los caracteres despues del query

        const center = item.title.slice(index,index+query.length);
        
        return{
            left,
            center, 
            right,
        };
    }
    const {left, center, right} = useMemo(()=>getPosition(item, query), [item, query])
    return <button>
                {left}<span style={{fontWeight:'bolder', backgroundColor:'yellow'}}>{center}</span>{right}
        </button>
}

export default MarkeItem;