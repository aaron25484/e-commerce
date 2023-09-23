import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Products } from './components/Products/Products'
import AlbumList from './components/Products/Testproducts'
import './index.css'


function App() {
  
  return (
    <>
      <Navbar/>
      <Products title="Lazaretto" artist='Jack White' price={50} />
      <AlbumList />
    </>
  )
}

export default App
