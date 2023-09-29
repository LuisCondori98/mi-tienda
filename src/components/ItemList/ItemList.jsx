import Item from "../Item/Item"

const ItemList = ({products}) => {

  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", justifyItems: "center", flex: "wrap"}}>
      {
        products.map(prods => {
          return (
            <Item key={prods.id} {...prods}/>
          )
        })
      }
    </div>
  )
}

export default ItemList