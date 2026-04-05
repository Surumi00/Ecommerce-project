import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import About from './pages/About'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Place_order from './pages/Place_order'
import Footer from './components/footer'
import Searchbar from './components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const App = () => {
  return (
    <div className='px-4 '>
      <ToastContainer/>
      <Navbar/>
      <Searchbar/>
    <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/orders' element={<Orders/>} />
         <Route path='/product/:productId' element={<Product/>} />
         <Route path='/place_order' element={<Place_order/>} />
    </Routes>
      <Footer/>
    </div>
  )
}
export default App;
