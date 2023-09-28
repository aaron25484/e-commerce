import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { RouterPaths } from './utils/Routes'

function App() {
  
  return (
    <>
      <Navbar/>
      <RouterPaths />
      <Footer/>
    </>
  )
}

export default App
