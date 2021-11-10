import React, { useState, useEffect } from "react";
import {getItem, producto} from "./GetFetch";
import ItemDetail from "./ItemList";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loanding, setLoanding] = useState(true)

    useEffect(() => {
        getItem
        .then(res => {
            setProducto(res)})
        .catch(err => console.log(err))
        .finally(() => setLoanding(false))
}, [])
    console.log(producto)


    return (
        <div>
        
            {loanding ? <h2>Cargando</h2> :
                <ItemDetail producto={producto} />}

        </div >)

}

export default ItemDetailContainer;