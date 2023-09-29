import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {

  const [prods, setProds] = useState([])
  const {itemId} = useParams()

  console.log(itemId)

  useEffect(() => {

    fetch("https://bitter-childlike-silica.glitch.me/api/products")
      .then(response => response.json())
      .then(data => {

        const prod = data.find(item => item.title = itemId)

        setProds(prod)
      })
  }, [itemId])

  return (
    <div>
      <ItemDetail {...prods}/>
    </div>
  )
}

export default ItemDetailContainer