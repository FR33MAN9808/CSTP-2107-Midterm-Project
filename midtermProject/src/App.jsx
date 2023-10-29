import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
<<<<<<< HEAD
import DetailPage from './pages/DetailPage/DetailPage'
=======
import CartPage from './pages/CartPage/CartPage'
>>>>>>> parent of 99fe265 (data fetched)

function App() {

  return (
    <Routes>
      <Route path='/' element = {<Homepage/>} />
<<<<<<< HEAD
      <Route path='/:category' element = {<CategoryPage/>}/>
      <Route path='/detail/:id' element = {<DetailPage/>}/>
=======
      <Route path='/category' element = {<CategoryPage/>}/>
      <Route path='/cart' element = {<CartPage/>}/>
      <Route path='/detail/:id' element = {<CategoryPage/>}/>
>>>>>>> parent of 99fe265 (data fetched)
    </Routes>
  )
}

export default App
