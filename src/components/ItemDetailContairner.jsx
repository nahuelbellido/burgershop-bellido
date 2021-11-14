import React, { useState, useEffect } from "react";
import {getItem, producto} from "./GetFetch";
import ItemDetail from "./ItemList";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loanding, setLoanding] = useState(true)
    const {ID}= useParams()

    useEffect(() => {
        if (ID) {
            getItem
           .then(res => {
               setProducto(res.filter(prod => prod.id === ID))})
           .catch(err => console.log(err))
           .finally(() => setLoanding(false))}
       
       else{
       getItem
       .then(res => {
           setProducto(res)})
       .catch(err => console.log(err))
       .finally(() => setLoanding(false))}
         
   
   }, [ID]) 
    console.log(producto)


    return (
        <div>
        
            {loanding ? <h2>Cargando</h2> :
                <ItemDetail producto={producto} />}

        </div >)

}

export default ItemDetailContainer;