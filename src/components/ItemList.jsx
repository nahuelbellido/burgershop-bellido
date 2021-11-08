import React from "react";
import {Item} from "./Item";


const ItemList = ({ producto }) => {

    return (
        <>
            {producto.map(prod => <Item prod={prod}/>)
            }

        </>
  )

}


export default ItemList;