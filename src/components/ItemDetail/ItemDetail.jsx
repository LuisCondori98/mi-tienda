

const ItemDetail = ({img, title, stock}) => {
  return (
    <div>
      <h1>Detalle de producto</h1>
      <img src={`https://typhoon-possible-tuberose.glitch.me`+img} alt="" />
      <h2>{title}</h2>
      <h3>{stock}</h3>
    </div>
  )
}

export default ItemDetail