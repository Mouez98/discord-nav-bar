import React from 'react'
import {FaDiscord, FaPoo} from 'react-icons/fa'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';

const SideBar = () => {
  return (
    <nav className='sidebar'>

    <SideBarIcon icon={<FaDiscord size={28} />} />
    <Divider />
    <SideBarIcon icon={<BsPlus size={32} />} />
    <SideBarIcon icon={<BsFillLightningFill size={20} />} />
    <SideBarIcon icon={<FaPoo size={20} />} />
    <Divider />
    <SideBarIcon icon={<BsGearFill size={25} />} />

 </nav>
  )
}

const SideBarIcon = ({icon, text= 'tooltip 💡'}) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100 z-20'>
          {text}
        </span>
    </div>
)

const Divider = () => (
  <hr  className='w-3/4 border-gray-700'/>
)

export default SideBar