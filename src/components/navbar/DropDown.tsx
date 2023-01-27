import React from 'react'
import { ShevronIcon } from '../icons/icons'
const DropDown = ({show}:{show:boolean}) => {
  return (
    <div className={`dropdown_menu ${show?"open":"close"}`}>
      <ul className='menu'>
        <li className='all_product'>
          <div><span>همه کالاها</span></div>
          <span>
          <ShevronIcon />
          </span>
        </li>
        <li className='all_product'>
          <div><span>همه کالاها</span></div>
          <span>
          <ShevronIcon />
          </span>
        </li>
        <li className='all_product'>
          <div><span>همه کالاها</span></div>
          <span>
          <ShevronIcon />
          </span>
        </li>
        <li className='all_product'>
          <div><span>همه کالاها</span></div>
          <span>
          <ShevronIcon />
          </span>
        </li>
        <li className='all_product'>
          <div><span>همه کالاها</span></div>
          <span>
          <ShevronIcon />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default DropDown