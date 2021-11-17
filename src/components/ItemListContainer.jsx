import React, { useState, useEffect } from "react";
import {getFetch, producto} from "./GetFetch";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
    const [producto, setProducto] = useState([])
    const [loanding, setLoanding] = useState(true)
    const {CategoryID}= useParams()

    useEffect(() => {
        if (CategoryID) {
             getFetch
            .then(res => {
                setProducto(res.filter(prod => prod.categoria === CategoryID))})
            .catch(err => console.log(err))
            .finally(() => setLoanding(false))}
        
        else{
        getFetch
        .then(res => {
            setProducto(res)})
        .catch(err => console.log(err))
        .finally(() => setLoanding(false))}
          
    
    }, [CategoryID]) 
    console.log(producto)
    console.log(CategoryID)


    return (
        <div>
            <p>{saludo}</p>
            <ItemCount initial={0} stock={5} onAdd={console.log("compra")}  />
            {loanding ? <h2>Cargando</h2> :
                <ItemList producto={producto} />}
                

        </div >)

}

export default ItemListContainer;