import Link from 'next/link'
import React from 'react'
import { SubCategory } from '../../../types'


const SidebarSubCategory = ({subCategoryData}:{subCategoryData:SubCategory[]}) => {
  return (
    <section className='subcategory'>
        {subCategoryData.map((item,index)=><div key={index} className="subList_wrapper w-100 py-1 px-4">
       <Link href={`/products/${item.title}`} className='title fs-12 fw-400 m-0 text-gray'> {item.title}</Link>

      </div>)}
 
    </section>
  )
}

export default SidebarSubCategory