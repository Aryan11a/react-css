
import Link from 'next/link'
import { GoLocation } from 'react-icons/go'

//main fn()
export default function Making() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}
      <div className="flex bg-black">
        <div className=" text-white w-1/12 text-sm text-center font-bold my-auto"> AMAZON  </div>
        <div className="text-white w-1/12 text-xs">Deliver<GoLocation />  <span className='font-bold text-center my-auto text-sm'> to Nepal</span></div>
        <div className="text-white w-8/12 font-bold">
          <span className='bg-gray-100 text-black p-2 text-lg font-bold'> ALL<input className='border-2   w-96  ' type="search " placeholder='Search' name="search" /> 🔍</span>
        </div>
        <div className="text-white w-1/12 font-bold text-center my-auto"> Nepal 🇳🇵</div>
        <div className="text-white w-1/12  text-center my-auto text-xs">Hello, sign in <span className='font-bold text-sm'> account&lists</span></div>
        <div className="text-white w-1/12 text-xs text-center my-auto"> Returns <span className='font-bold text-sm'> & Order</span></div>
        <div className="text-white w-1/12 font-bold text-center my-auto ">🛒Cart</div>
      </div>
      <div className="flex bg-gray-600  text-white  ">
        <div className="mx-4 ">☰All</div>
        <div className="mx-4 text-sm h-6 w-1/12">Today's Deals</div>
        <div className="mx-4 text-sm h-6 w-1/12">Customer Service</div>
        <div className="mx-4 text-sm h-6 w-1/12">Registry</div>
        <div className="mx-4 text-sm h-6 w-1/12">Gift Cards</div>
        <div className="mx-4 text-sm h-6 w-1/12">Sell</div>
      </div>
      <div className='' >
        <img src=" https://source.unsplash.com/1400x350/? shoes clothes" alt="" />
        <div className='flex mx-auto '>
          <div className='font-bold text-xs '>
            <img className='border-4' src="https://source.unsplash.com/400x356/? Iphone12" alt="" />
            Shop Now
          </div>
          <div className='font-bold text-xs'>
            <img className='border-4' src="https://source.unsplash.com/400x356/? laptop macbook" alt="" />
            Shop Now
          </div>
          <div className='font-bold text-xs ' >
            <img className='border-4' src="https://source.unsplash.com/400x356/? mouse,keyboards,headsets,chairs" alt="" /> Shop Now
          </div>
          <div className='bg-gray-100 text-black border-4 border-white  h-20 font-bold  '>
            <span className='text-lg'>
              Sign in for the best experience
            </span>
            <p className='text-sm bg-yellow-400 mt-5  '>
              Sign in securely
            </p>
            <img className='mt-5' src="https://source.unsplash.com/400x249/? ps5" alt="" />
            <span className='text-xs'> Shop Now </span>
          </div>

        </div>

      </div>


    </>
  )
};
