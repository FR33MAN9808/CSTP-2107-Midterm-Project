import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import CartPage from './pages/CartPage/CartPage'

function App() {

  return (
    <Routes>
      <Route path='/' element = {<Homepage/>} />
      <Route path='/category' element = {<CategoryPage/>}/>
      <Route path='/cart' element = {<CartPage/>}/>
      <Route path='/detail/:id' element = {<CategoryPage/>}/>
    </Routes>
  )
}

export default App
