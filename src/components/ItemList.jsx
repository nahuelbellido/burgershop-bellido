import React from "react";
import {Item} from "./Item";


const ItemList = ({ producto }) => {

    return (
        <>
            {producto.map(prod =><Item key={prod.id} prod={prod}/>)
            }

        </>
  )

}


export default ItemList;