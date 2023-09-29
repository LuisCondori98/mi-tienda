import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({title, price, stock, img}) => {
  return (
    <div style={{textAlign: "center"}}>
      <img src={`https://bitter-childlike-silica.glitch.me`+img} alt={img} />
      <h1>{title}</h1>
      <h2>S/. {price}</h2>
      <h3>{stock} u.</h3>
      <Link className="boton-carrito" to={`/item/${title}`}>Ver detalles</Link>
    </div>
  )
}

export default Item