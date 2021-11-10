import React from "react";

 export const ItemDetail= ({ prod }) => {

    return (
            <div className= "productosContenedor">
           <div className="card" style={{ width: "18rem" }} key={prod.id}>
                <img src={prod.imagen} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">  ${prod.precio}</p>
                    <span className="badge bg-info">{prod.categoria}</span>
                
                </div>
            </div>

            
            </div>
        
  )

}
