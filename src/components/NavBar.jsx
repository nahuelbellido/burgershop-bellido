import CartWidget from "./CartWidget"


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
				<a className="nav-link active" href="index.html" class="text-decoration-none">Inicio</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="index.html" class="text-decoration-none">Menu</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="index.html" class="text-decoration-none">Sucursales</a>
			</li>
            </ul>

            </header>

			<CartWidget/>

           </div>
  
            )
}

export default NavBar