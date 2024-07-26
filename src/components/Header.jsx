import { Link } from "react-router-dom"

import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="" width={150} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to ="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to={"/movil"} className="nav-link" href="#">Movil</Link>
        </li>
        <li className="nav-item">
          <Link to={"/laptop"} className="nav-link" href="#">Laptop</Link>
        </li>
        <li className="nav-item">
          <Link to={"/tienda"} className="nav-link" href="#">Tienda</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><Link to={"/categorias/1"} className="dropdown-item" href="#">Action</Link></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to={"/contactos"} className="nav-link " >Contacto</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


  )
}

export default Header