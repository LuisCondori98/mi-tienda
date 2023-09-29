import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

  const [prods, setProds] = useState([])

  useEffect(() => {

    fetch("https://bitter-childlike-silica.glitch.me/api/products")
      .then(response => response.json())
      .then(data => {
        setProds(data)
      })
  }, [])
  
  return (
    <div>
      <ItemList products={prods}/>
    </div>
  )
}

export default ItemListContainer