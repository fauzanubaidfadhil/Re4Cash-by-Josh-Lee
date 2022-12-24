import './App.css'
import Beranda from './pages/Beranda'
import {Routes, Route} from 'react-router-dom'
import Edukasi from './pages/Edukasi'
import TentangKami from './pages/TentangKami'
import MarketPlaceUtama from './pages/MarketPlaceUtama'
import DetailProduct from './pages/DetailProduct'

function App() {
 

  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Beranda/>}/>
          <Route path="/edukasi" element={<Edukasi/>}/>
          <Route path="/tentangkami" element={<TentangKami/>}/>
          <Route path="/marketplace" element={<MarketPlaceUtama/>}/>
          <Route path="/detail-product" element={<DetailProduct/>}/>
        </Routes>
    </div>
    
  )
}

export default App
