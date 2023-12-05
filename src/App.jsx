import React from 'react'
import BasketProduct from './components/BasketProduct'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import {updateTotal} from './redux/features/basketslice'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const basket =useSelector((state)=> state)
  
  useEffect(() => {
    dispatch(updateTotal())
  },[basket])
  return (
    <div  className='max-w-7xl mx-auto'>
      <h1 className="text-center mt-8 text-4xl text-orange-500" style={{fontWeight:'bold'}}>Store</h1>
      <Navbar />
      <BasketProduct/>
    </div>
  )
}

export default App