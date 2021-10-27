import CartWidget from "./CartWidget"


const NavBar = () => {
  return (
           <div>
               <header class="container-fluid">
		<nav class="navbar navbar-light bg-light">
			<a class="navbar-brand" href="#">
			  <img src="https://i.ibb.co/KsCnsWs/descarga.png" width="200" height="150" alt=""></img>
			</a>
		  </nav>
		


		<ul class="nav justify-content-end">
			<li class="nav-item">
				<a class="nav-link active" href="index.html" class="text-decoration-none">Inicio</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="index.html" class="text-decoration-none">Menu</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="index.html" class="text-decoration-none">Sucursales</a>
			</li>
            </ul>

            </header>

			<CartWidget/>

           </div>
  
            )
}

export default NavBar