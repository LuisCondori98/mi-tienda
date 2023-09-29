import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link>Inicio</Link>
        <Link>Productos</Link>
        <Link>Servicios</Link>
      </ul>
    </nav>
  )
}

export default NavBar