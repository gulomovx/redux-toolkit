import { useSelector } from 'react-redux'
const Navbar = () => {
    const {amount} = useSelector((store) => store.basket)
    console.log(amount);
  return (
      <div className='flex justify-between'>
          <p className="text-4xl">Home</p>
          <p className="text-4xl">Basket <span className='bg-red-500 rounded-full p-1 text-white'>{amount}</span></p>
    </div>
  )
}

export default Navbar