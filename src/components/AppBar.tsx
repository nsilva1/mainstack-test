import product from '../assets/images/product.svg'
import product2 from '../assets/images/product2.svg'
import product3 from '../assets/images/product3.svg'
import product4 from '../assets/images/product4.svg'


const AppBar = () => {

  return (
    <div className='fixed top-1/2 left-4 -translate-y-1/2 z-40 p-4 bg-white shadow-lg rounded-full'>
        <div className='flex flex-col gap-4 items-center justify-center'>
            <img src={product} alt="Product 1" className='w-8 h-8 filter grayscale hover:grayscale-0 hover:bg-gray-100 hover:rounded-full' />
            <img src={product2} alt="Product 2" className='w-8 h-8 filter grayscale hover:grayscale-0 hover:bg-gray-100 hover:rounded-full' />
            <img src={product3} alt="Product 3" className='w-8 h-8 filter grayscale hover:grayscale-0 hover:bg-gray-100 hover:rounded-full' />
            <img src={product4} alt="Product 4" className='w-8 h-8 filter grayscale hover:grayscale-0 hover:bg-gray-100 hover:rounded-full' />           
        </div>
    </div>
  )
}

export { AppBar }