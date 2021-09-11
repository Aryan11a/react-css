
import Link from 'next/link'

//main fn()
export default function OnlineShop() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}

      <div>
        <img src="https://source.unsplash.com/1400x80/? " alt="" />
      </div>

      <div className='text-center text-gray-400 '>
        <span className='font-bold'> Search  <input type="search" className='bg-blue-50 text-gray-400 font-bold border-2' name="search" /> </span>
        <input type="submit" value="search" />
      </div> <br />



      <div>
        <span className=' text-lg font-bold '>Laptop.Name=Dell <input className='text-sm align-text-top border-2 ' type="button" value="Rs. 199,000" /> </span> <br />

        <img src=" https://source.unsplash.com/1000x800/? Dell laptop" alt="laptop" />
      </div> <br />

      <div className='text-right'>
        <span className='font-bold'>  Gmail account  <input type="email" className='bg-blue-50  <input type="search" name="search" />blue-50 border-2' name="Email" /> </span> <br />
      </div> <br />

      <div className='text-right'>
        <span className='font-bold'>  Password  <input type="email" className='bg-blue-50 border-2' name="Password" /></span> <br />
      </div> <br />

      <div className=' text-green-600 '>
        <span className='font-bold'> Name <br /> <input type="text" className='bg-purple-100 border-2' /> </span> <br />
        <span className='font-bold'> Date <br />  <input type="date" className='bg-purple-50 border-2' /> </span> <br />
      </div> <br />

      <div>
        General= Male  <input type="radio" name="Male" id='Male' /> <br /> Female <input type="radio" name="Male" id='Male' /> </div>


      <div className='text-blue-400 font-bold'>
        I am 18 years old or I am 18 years older.  <input type="checkbox" name="CheckBox" />
      </div> <br />
      <div>
        <span className='font-bold'> <input type="submit" value="Buy" className='bg-gray-200' /> </span>
      </div> <br />
      <div className='font-bold text-right'>
        <input type="reset" value="Back" className='bg-gray-200 text-center' />
      </div>


    </>
  )
};
