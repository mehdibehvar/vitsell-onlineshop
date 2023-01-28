import React from 'react'
import AddToCard from '../common/AddToCard'

const KeySpicifications = ({hastitle,className}:{hastitle:boolean,className?:string}) => {
  return (
    <div className={`${className} key_properties d-flex flex-column w-100`}>
    {hastitle&&<h5>ویژگی های کلیدی</h5>}
    <ul className="properties_list d-flex flex-column">
   
{[1,2,3,4].map((item,index)=><li key={index}>
        <span className="property"> فن آوری صفحه نمایش :</span>
        <span className="property_value">Liquid Retina</span>
      </li>)}
    </ul>
  </div>
  )
}

export default KeySpicifications