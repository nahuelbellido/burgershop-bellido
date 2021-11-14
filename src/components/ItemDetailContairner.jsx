import React, { useState, useEffect } from "react";
import {getItem, producto} from "./GetFetch";
import ItemDetail from "./ItemList";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loanding, setLoanding] = useState(true)
    const {id}= useParams()

    useEffect(() => {
        if (id) {
            getItem
           .then(res => {
               setProducto(res.find( prod => prod.id === id))})
           .catch(err => console.log(err))
           .finally(() => setLoanding(false))}
       
       else{
       getItem
       .then(res => {
           setProducto(res)})
       .catch(err => console.log(err))
       .finally(() => setLoanding(false))}
         
   
   }, [id]) 
    console.log(producto)


    return (
        <div>
        
            {loanding ? <h2>Cargando</h2> :
                <ItemDetail producto={producto} />}

        </div >)

}

export default ItemDetailContainer;