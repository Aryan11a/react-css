import Link from 'next/link'

//main fn()
export default function Instagram() {
  //your variable, function and hooks go here

  //main return
  return (
    <>
      {/* Code Starts from here */}
      <div className='max-w-2xl mx-auto p-8 '>
        <h2 className="sm:text-lg sm:leading-snug font-semibold wide uppercase text-pink-600 flex">INTRODUCING...</h2>
        <p className="text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 flex">Tailwind stories.</p>
      </div>
      <ul className="flex space-x-6 ">
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
            <a className="bg-white p-1 rounded-full" href="#">
              <img className="h-24 w-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
            </a>
          </div>
          <a href="#">Kitty_one</a>
        </li>
      </ul>
      <ul>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
            <a className="bg-white p-1 rounded-full" href="#">
              <img className="h-24 w-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
            </a>
          </div>
          <a href="#">Kitty_one</a>
        </li>
      </ul>
      <ul>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
            <a className="bg-white p-1 rounded-full" href="#">
              <img className="h-24 w-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
            </a>
          </div>
          <a href="#">Kitty_one</a>
        </li>
      </ul>
      <ul>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
            <a className="bg-white p-1 rounded-full" href="#">
              <img className="h-24 w-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
            </a>
          </div>
          <a href="#">Kitty_one</a>
        </li>
      </ul>

    </>
  )
};
