
import Link from 'next/link'
import { BsBatteryFull } from 'react-icons/bs';
import { BiWifi2 } from 'react-icons/bi';
import { AiFillSignal } from 'react-icons/ai';
import { BsUnlock } from 'react-icons/bs'


//main fn()
export default function Iphone() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}

      <div className=" relative overflow-hidden border-[14px] border-black h-[712px] w-[350px] bg-black rounded-[60px] shadow-xl ">
        <img className="absolute inset-0 h-full w-full object-cover " src="https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg" alt="wallpapers" />
        <div className='absolute top-0 inset-x-0'>
          <div className="h-6 w-40 mx-auto bg-black rounded-b-3xl ">
          </div>
        </div>
        <div className="relative">

          <div className=" mt-2 mr-5 flex justify-end space-x-1">
            <AiFillSignal></AiFillSignal>
            <BiWifi2></BiWifi2>

            <BsBatteryFull className="h-4 w-4 "></BsBatteryFull></div>
          <div className="mt-1.5 h-0.5 w-10 bg-white ml-auto mr-7 rounded"></div>
          <div className=''>
            <BsUnlock className="h-12 w-12 mx-auto text-white mt-8"></BsUnlock>
            <div className="text-white text-5xl mx-auto text-center mt-5 font-extralight">11:35AM</div>
            <div className="text-white text-center text-lg mt-5 font-extralight">Monday,June 7</div>



          </div>

        </div>

      </div>

    </>
  )
};
