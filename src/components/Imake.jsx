
import Link from 'next/link'
import { RiVideoAddLine } from 'react-icons/ri'
//main fn()
export default function Imake() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}
      <div className="flex">
        <div className="my-3 mx-4 ">☰</div>
        <div className="my-3 mx-1 "> Youtube </div>
        <div className="my-3 mx-auto  ">
          <span className=' font-bold text-lg bg-gray-100 p-3 text-black'> <input className='border-2 h-8 w-96' type="search" placeholder='search' name="search" id="" /> 🔍</span>🎙
        </div>
        <div className="my-4 mx-6 "><RiVideoAddLine /></div>
        <div className="my-3 mx-4">┆┆┆</div>
        <div className="my-3 mx-4 border-2  rounded-full p-1 bg-green-400 ">😃</div>
      </div>
    </>
  )
};
