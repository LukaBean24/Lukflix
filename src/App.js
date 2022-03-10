import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Series from './pages/Series'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/series' element={<Series />} />
      <Route path='/watchlist' element={<Watchlist />} />
    </Routes>
  )
}

export default App
