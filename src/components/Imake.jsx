
import Link from 'next/link'
import { RiVideoAddLine, RiLayoutTopFill } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiFillHome } from "react-icons/ai"
import { FaRegCompass } from "react-icons/fa"
import { CgLayoutGridSmall } from "react-icons/cg"
//main fn()
export default function Imake() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}
      <div className="flex">
        <div className="my-4 mx-4 ">☰</div>
        <div className="my-2 mx-1 flex "> <img src="https://cdn.emojidex.com/emoji/hdpi/YouTube.png" alt="" />     <span className='my-1'> Youtube </span> </div>
        <div className="my-3 mx-auto  ">
          <span className=' font-bold text-lg bg-gray-100 p-3 text-black'> <input className='border-2 h-8 w-96' type="search" placeholder='search' name="search" id="" /> 🔍</span>🎙
        </div>
        <div className="my-4 mx-6 "><RiVideoAddLine /></div>
        <div className="my-4 mx-4"><CgLayoutGridSmall /></div>
        <div className="my-4 mx-4"><IoMdNotificationsOutline /></div>
        <div className="my-3 mx-4"><img className='rounded-full rounded-t-full rounded-b-full ' src="https://source.unsplash.com/34x30/? nature" alt="" /></div>
      </div>
      <div className="a">
        <div className="mx-5 mt-2 flex "><AiFillHome /> <span className='mx-4 mb-6 text-xs  text-center '> Home </span></div>
        <div className="mx-5 flex"><FaRegCompass /> <span className='mx-4 mb-6 text-xs text-center'>Explore</span> </div>
        <div className="mx-5 flex"><RiLayoutTopFill /> <span className='mx-4 mb-6 text-xs text-center'>Subscriptions</span> </div>
        <div className="">─────────────</div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
        <div className="mx-5"></div>
      </div>
    </>
  )
};
