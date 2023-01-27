import React from 'react'
import { SubCategory } from '../../../../types'

const SubCategory = ({subCategoryData}:{subCategoryData:SubCategory[]}) => {
  return (
    <section className='subcategory'>
        {subCategoryData.map((item,index)=><div key={index} className="subList_wrapper">
        <h3 className='title'>{item.title}</h3>
        <ul className='sublist'>
            {item.subList.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
      </div>)}
 
    </section>
  )
}

export default SubCategory