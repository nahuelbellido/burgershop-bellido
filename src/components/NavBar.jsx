import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
           <div>
               <header className="container-fluid">
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
			  <img src="https://i.ibb.co/KsCnsWs/descarga.png" width="200" height="150" alt=""></img>
			</a>
		  </nav>
		


		<ul className="nav justify-content-end">
			<li className="nav-item">
				<Link to= '/' className="nav-link active"  class="text-decoration-none">Inicio</Link>
			</li>
			<li className="nav-item">
				<Link to= '/categoria/HAMBURGUESAS' className="nav-link"  class="text-decoration-none">Hamburguesas</Link>
			</li>
			<li className="nav-item">
			<Link to= '/categoria/GUARNICION' className="nav-link" class="text-decoration-none">Guarnicion</Link>
			</li>
			<li className="nav-item">
			<Link to= '/categoria/BEBIDAS' className="nav-link"  class="text-decoration-none">Bebidas</Link>
			</li>
			<li className="nav-item">
			<Link to= '/cart'>
			<CartWidget/>
			</Link>

			</li>
            </ul>
			
            </header>

			

           </div>
  
            )
}

export default NavBar