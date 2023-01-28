import Link from 'next/link'
import React from 'react'
import { SubCategory } from '../../../../types'

const SubCategory = ({subCategoryData}:{subCategoryData:SubCategory[]}) => {
  return (
    <section className='subcategory'>
        {subCategoryData.map((item,index)=><div key={index} className="subList_wrapper">
       <Link href={`products/${item.title}`}> <h3 className='title'>{item.title}</h3></Link>
        <ul className='sublist'>
            {item.subList.map((item,index)=><Link href={`/products/${item}`} key={index}><li >{item}</li></Link>)}
        </ul>
      </div>)}
 
    </section>
  )
}

export default SubCategory