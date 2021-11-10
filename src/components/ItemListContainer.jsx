import React, { useState, useEffect } from "react";
import {getFetch, producto} from "./GetFetch";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContairner";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
    const [producto, setProducto] = useState([])
    const [loanding, setLoanding] = useState(true)

    useEffect(() => {
        getFetch
        .then(res => {
            setProducto(res)})
        .catch(err => console.log(err))
        .finally(() => setLoanding(false))
}, [])
    console.log(producto)


    return (
        <div>
            <p>{saludo}</p>
            <ItemCount initial={0} stock={5} onAdd={console.log("compra")}  />
            {loanding ? <h2>Cargando</h2> :
                <ItemList producto={producto} />}
                <h2>DETALLES</h2>
                <ItemDetailContainer />

        </div >)

}

export default ItemListContainer;