import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    
    const SumaItem = () => {
      count < stock ? setCount(count + 1): alert(`superaste limite de stock`)} 
    const RestaItem = () => {
        count > initial ? setCount(count - 1) : alert(`sin stock`)
    }

    
    
    
    return (
        <div>
            <button className="btn btn-primary" onClick={SumaItem}>+</button>
            <label>Cantidad:  {count}</label>
            <button className="btn btn-warning" onClick={RestaItem} >-</button>
            <button className="btn btn-success" onClick={onAdd}>Comprar</button>

        </div>
    )
}

export default ItemCount; 


