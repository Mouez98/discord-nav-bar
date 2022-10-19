import React from 'react'
import Header from './Header'

import photo1 from '../assets/user-10.jpg'
import photo2 from '../assets/user-14.jpg'
import photo3 from '../assets/user-17.jpg'
import photo4 from '../assets/user-18.jpg'
import photo5 from '../assets/user-5.jpg'
import { BsPlusCircleFill } from 'react-icons/bs'

const data = [
    {
       id: 1,
       name: 'Krusaki',
       comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       photo: photo1
    },
    {
       id: 2,
       name: 'Laura',
       comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
       photo: photo2
    },
    {
       id: 3,
       name: 'Mahmoud',
       comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
       photo: photo3
    },
    {
       id: 4,
       name: 'Ken',
       comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       photo: photo4
    },
    {
       id: 5,
       name: 'Yu',
       comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
       photo: photo5
    },
    
]

const MainContent = () => {
  return (
    <main className='min-h-screen relative w-full'>
        <Header />
        <div className='px-8 py-2'>
          {
            data.map(user => {
                return (<div key={user.id} className='flex gap-6 items-start my-5'> 
                <figure className='user-img'>
                    <img src={user.photo} alt={`of ${user.name}`} className='w-12 h-12 rounded-full mx-auto shadow-xl'/>
                </figure>
                <div className='user-text'> 
                    <h3 className='dark:text-white text-gray-800 text-xl mb-2 '>{user.name} <span className='text-xs text-gray-500  dark:text-gray-600'>one week ago</span></h3>
                    <p className='dark:text-gray-200  text-gray-700 text-lg'>{user.comment}</p>
                </div>
                </div>)
            })
          }
        </div>
        <div className='sticky h-11 w-11/12 bottom-5 right-3 mx-auto flex items-center'>
          <label htmlFor="addComment"> <BsPlusCircleFill size={22} className='text-emerald-500 -mr-9 relative z-10 ml-2' /></label>
          <input type="text" id='addComment' placeholder='enter message...' className='text-gray-600 w-full h-full rounded bg-gray-300 dark:bg-gray-500 placeholder:text-gray-600 placeholder:text-xl focus:outline-none p-4 pl-9'/>
        </div>
    </main>
  )
}

export default MainContent