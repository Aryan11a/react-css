
import Link from 'next/link'

//main fn()
export default function Making() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}
      <div className="flex bg-black">
        <div className=" text-white w-1/12 text-lg text-center font-bold">amazon</div>
        <div className="text-white w-1/12">Deliver to Nepal</div>
        <div className="text-white w-8/12 font-bold">
          <span className='bg-gray-100 text-black p-2 text-lg font-bold'> ALL<input className='border-2  ' type="search " placeholder='Search' name="search" /> 🔍</span>
        </div>
        <div className="text-white w-1/12 font-bold ">Nepal🇳🇵</div>
        <div className="text-white w-1/12 font-bold">account</div>
        <div className="text-white w-1/12 font-bold">Order</div>
        <div className="text-white w-1/12 font-bold">Cart</div>
      </div>
      <div className="flex bg-gray-600 text-white ">
        <div className="mx-3">All</div>
        <div className="mx-3">Today's Deals</div>
        <div className="mx-3">Customer Service</div>
        <div className="mx-3">Registry</div>
        <div className="mx-3">Gift Cards</div>
        <div className="mx-3">Sell</div>
      </div>
      <div>
        <img src=" https://source.unsplash.com/1600x900/? shoes clothes" alt="" />
        <div className='flex'>
          <img className=' mx-32 my-32 overflow-hidden' src=" https://source.unsplash.com/400x800/? shoes" alt="" />
          <div>
            <img className='mx-32 my-32 ' src=" https://source.unsplash.com/400x800/? car,laptop" alt="" />
          </div>
        </div>

      </div>


    </>
  )
};
