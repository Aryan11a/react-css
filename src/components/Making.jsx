
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
        <div className=" text-white w-1/12 text-lg text-center font-bold my-auto">AMAZON</div>
        <div className="text-white w-1/12 text-xs">Deliver to<GoLocation /> <span className='font-bold text-center my-auto text-sm'> Nepal</span></div>
        <div className="text-white w-8/12 font-bold">
          <span className='bg-gray-100 text-black p-2 text-lg font-bold'> ALL<input className='border-2  ' type="search " placeholder='Search' name="search" /> 🔍</span>
        </div>
        <div className="text-white w-1/12 font-bold text-center my-auto"> Nepal 🇳🇵</div>
        <div className="text-white w-1/12  text-center my-auto text-xs">Hello, sign in <span className='font-bold text-sm'> account&lists</span></div>
        <div className="text-white w-1/12 text-xs text-center my-auto"> Returns <span className='font-bold text-sm'> & Order</span></div>
        <div className="text-white w-1/12 font-bold text-center my-auto">🛒Cart</div>
      </div>
      <div className="flex bg-gray-600 text-white ">
        <div className="mx-4 ">☰All</div>
        <div className="mx-4 text-sm h-6">Today's Deals</div>
        <div className="mx-4 text-sm h-6">Customer Service</div>
        <div className="mx-4 text-sm h-6">Registry</div>
        <div className="mx-4 text-sm h-6">Gift Cards</div>
        <div className="mx-4 text-sm h-6">Sell</div>
      </div>
      <div className='' >
        <img src=" https://source.unsplash.com/1600x800/? shoes clothes" alt="" />
        <div className='flex mx-auto'>
          <div>
            <img src="https://source.unsplash.com/400x700/? Iphone12" alt="" />
          </div>
          <div>
            <img src="https://source.unsplash.com/400x700/? laptop macbook" alt="" />
          </div>
          <div>
            <img src="https://source.unsplash.com/400x700/? mouse,keyboards,headsets,chairs" alt="" />
          </div>
          <div className='bg-black text-white h-20'>
            <img src="https://source.unsplash.com/400x700/? ps5" alt="" />
          </div>
          <div className="my-auto">

          </div>
        </div>

      </div>


    </>
  )
};
