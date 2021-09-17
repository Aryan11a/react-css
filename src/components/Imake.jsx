
import Link from 'next/link'
import { RiVideoAddLine, RiLayoutTopFill, RiLayoutLeftFill } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiFillHome, AiOutlineLike, AiOutlineTrophy, AiOutlineSetting, AiOutlineQuestionCircle } from "react-icons/ai"
import { FaRegCompass, FaYoutubeSquare } from "react-icons/fa"
import { CgLayoutGridSmall, CgFlag, CgCopyright } from "react-icons/cg"
import { VscHistory } from "react-icons/vsc"
import { MdWatchLater } from "react-icons/md"
import { FiChevronDown } from "react-icons/fi"
import { SiYoutubegaming } from "react-icons/si"
import { GiAerialSignal } from "react-icons/gi"
import { BiMessageError } from "react-icons/bi"
//main fn()
export default function Imake() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}
      <div className="flex">
        <div className="my-4 mx-4 ">☰</div>
        <div className="my-2 mx-1 flex "> <img src="https://cdn.emojidex.com/emoji/hdpi/YouTube.png" alt="" />     <span className='my-2'> Youtube </span> </div>
        <div className="my-3 mx-auto  ">
          <span className=' font-bold text-lg bg-gray-100 p-3 text-black'> <input className='border-2 h-8 w-96' type="search" placeholder='search' name="search" id="" /> 🔍</span>🎙
        </div>
        <div className="my-4 mx-6 "><RiVideoAddLine /></div>
        <div className="my-4 mx-4"><CgLayoutGridSmall /></div>
        <div className="my-4 mx-4"><IoMdNotificationsOutline /></div>
        <div className="my-3 mx-4"><img className='rounded-full rounded-t-full rounded-b-full ' src="https://source.unsplash.com/33x30/? nature" alt="" /></div>
      </div>
      <div className="a">
        <div className="mx-5 mt-2 flex "><AiFillHome /> <span className='mx-4 mb-6 text-xs  text-center '> Home </span></div>
        <div className="mx-5 flex"><FaRegCompass /> <span className='mx-4 mb-6 text-xs text-center'>Explore</span> </div>
        <div className="mx-5 flex"><RiLayoutTopFill /> <span className='mx-4 mb-6 text-xs text-center'>Subscriptions</span> </div>
        <div className="mb-6">─────────────</div>
        <div className="mx-5 flex"><RiLayoutLeftFill /> <span className='mx-4 mb-6 text-center text-xs'>library</span></div>
        <div className="mx-5 flex"><VscHistory /> <span className='mx-4 mb-6 text-center text-xs'>History</span></div>
        <div className="mx-5 flex"><FaYoutubeSquare /> <span className='mx-4 mb-6 text-center text-xs'>Your Videos</span></div>
        <div className="mx-5 flex"><MdWatchLater /><span className='mx-4 mb-6 text-center text-xs'>Watch later</span> </div>
        <div className="mx-5 flex"><AiOutlineLike /><span className='mx-4 mb-6 text-center text-xs'>Liked Videos</span></div>
        <div className="mx-5 flex"><FiChevronDown /><span className='mx-4 mb-6 text-center text-xs'>Show more</span></div>
        <div className="mb-1">─────────────</div>
        <div className="mx-2 flex"><span className=' mb-6 text-center text-xs'>SUBSCRIPTION</span></div>
        <div className="mx-5 flex"><span className='mx-4 mb-6 text-center text-xs'></span></div>
        <div className="mx-5 flex"><FiChevronDown /><span className=' mx-2 text-center text-xs'>Show more</span></div>
        <div className="mb-1">─────────────</div>
        <div className="mx-2 flex"><span className=' mb-6 text-center text-xs'>MORE FROM YOUTUDE</span></div>
        <div className="mx-5 flex"><SiYoutubegaming /><span className='mx-4 mb-6 text-center text-xs'>Gaming</span></div>
        <div className="mx-5 flex"><GiAerialSignal /><span className='mx-4 mb-6 text-center text-xs'>Live</span></div>
        <div className="mx-5 flex"><AiOutlineTrophy /><span className='mx-4 mb-6 text-center text-xs'>Sports</span></div>
        <div className="">─────────────</div>
        <div className="mx-5 flex"><AiOutlineSetting /><span className='mx-4 mb-6 text-center text-xs'>Settings</span></div>
        <div className="mx-5 flex"><CgFlag /><span className='mx-4 mb-6 text-center text-xs'>Report history</span> </div>
        <div className="mx-5 flex"><AiOutlineQuestionCircle /><span className='mx-4 mb-6 text-center text-xs'>Help</span></div>
        <div className="mx-5 flex"><BiMessageError /><span className='mx-4 mb-6 text-center text-xs'>Send Feedback</span></div>
        <div className="mx-1  text-xs"><span className='mx-4 mb-6 text-center '>About Press Copyright</span>  </div>
        <div className='mx-1 text-xs'> <span className='mx-4 mb-6 '> Contact us Creators Advertise</span> </div>
        <div className='mx-1 text-xs'> <span className='mx-4 mb-6 '> Developers </span> </div>

        <div className='mx-1 text-xs'> <span className='mx-4 mb-6 '>  </span> </div>

        <div className='mx-1 text-xs'> <span className='mx-4 mb-6 '> Terms Privacy Policy & Safety </span> </div>
        <div className='mx-1 text-xs'> <span className='mx-4 mb-6 '> How YouTube works </span> </div>
        <div className='mx-1 text-xs'> <span className='mx-4 mb-6 '> Test new features </span> </div>
        <div className='mx-1 text-xs'> <span className='mx-4 mb-6 '>  </span> </div>
        <div className="mx-5 flex text-xs "> <span className='mb-1'> <CgCopyright /></span><span className='mx-4 my-auto '>2021 Google LLC</span></div>
      </div>
    </>
  )
};
