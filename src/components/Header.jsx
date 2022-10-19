import React from 'react';
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import useDarkMode from '../hooks/useDarkTheme'

const Header = () => {
  return (
    <header className="bg-gray-100 dark:bg-gray-700 shadow-md flex justify-between items-center w-full h-16 px-3">
      <h2 className="text-xl text-gray-500 min-w-fit md:text-3xl">
        <FaHashtag className='inline-block' /> tailwind-css
      </h2>
      <div className="flex items-center text-gray-800 dark:text-gray-500 gap-4">
        <Theme />
        <Search />
        <FaRegBell size={22} className='hover:text-pink-400 duration-200 cursor-pointer '/>
        <FaUserCircle size={22} className='hover:text-pink-400 duration-200 cursor-pointer'/>
      </div>
    </header>
  );
};

const Search = () => {
  return (
    <div className='flex items-center relative '>
      <label htmlFor="search" className='absolute right-2 cursor-pointer'>
        <FaSearch />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        className="shrink border-none focus:outline-none rounded-md bg-gray-300 dark:bg-gray-600 placeholder:text-gray-500 h-9 p-3 placeholder:text-xl shadow-sm"
      />
    </div>
  );
};
const Theme = () => {
  const [darkTheme, setDarkTheme] =  useDarkMode()
  console.log(darkTheme);
  const handleMode = () => setDarkTheme(!darkTheme);
  return <span onClick={handleMode}>
    {darkTheme? <FaSun size={22} className='hover:text-pink-400 duration-200 cursor-pointer'/>: <FaMoon size={22} className='hover:text-pink-400 duration-200 cursor-pointer'/>}
  </span>
  
};

export default Header;
