import React from "react";

 export const Item= ({ prod }) => {

    return (
       
           <div className="card" style="width: 18rem;" key={prod.id}>
                <img src={producto.imagen} class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">${producto.nombre}</h5>
                    <p className="card-text"> $ ${producto.precio}</p>
                    <span className="badge bg-info">${producto.categoria}</span>
                    <a href="#" id='${producto.id}' class="btn btn-success btn-compra">COMPRAR</a>
                </div>
            </div>

            

        
  )

}


