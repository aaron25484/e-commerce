import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { RouterPaths } from './utils/Routes'
import Cart from './components/Cart/Cart'
import { useState } from 'react'


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar/>
      <RouterPaths />
      <Footer/> 
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default App
