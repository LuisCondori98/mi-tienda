import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/Navbar/NavBar"
import Item from "./components/Item/Item"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/productos" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />s
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App