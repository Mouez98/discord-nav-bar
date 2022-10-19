import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import { FaHashtag } from 'react-icons/fa';

const Aside = () => {
  return (
    <aside className="bg-gray-100 dark:bg-gray-800 w-72 min-h-screen justify-start px-3 flex-shrink-0 sticky top-0 overflow-y-auto ">
      <h2 className="text-lg tracking-wider font-bold text-gray-600 dark:text-gray-400 mr-auto ml-4  align-middle my-6">
        Channels
      </h2>

      <List />
      <List
        listName="Questions"
        listItems={['jit-compilation', 'purge-files', 'dark-mode']}
      />
      <List listName="Random" listItems={['variants', 'plugins']} />
    </aside>
  );
};

export default Aside;

const List = ({
  listName = 'Topics',
  listItems = ['tailwind-css', 'react'],
}) => {
  const [showItems, setShowItems] = useState(true);

  const showItemsHandler = () => setShowItems((prev) => !prev);
  return (
    <div>
      <h3 className="flex justify-between items-center text-blue-600 dark:text-blue-500 text-xl font-bold cursor-pointer">
        <span onClick={showItemsHandler}>
          {showItems ? (
            <BiChevronDown className="inline-block text-gray-500 mr-2" />
          ) : (
            <BiChevronRight className="inline-block text-gray-500 mr-2" />
          )}
          {listName}
        </span>
        <span className="text-white">
          <BsPlus className="text-gray:500" />
        </span>
      </h3>
      {showItems && (
        <ul>
          {listItems.map((item, i) => (
            <li
              key={i}
              className="text-gray-700 dark:text-gray-500 cursor-pointer pl-4 flex items-center my-2 font-semibold"
            >
              <FaHashtag size={16} className=" text-lg tracking-wider font-semibold text-gray-500 "/>&nbsp;
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
