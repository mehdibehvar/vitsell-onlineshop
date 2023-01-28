import React from 'react'
import SectionsHeader from '../common/SectionsHeader'
import { FeaturesIcon } from '../icons/icons'
import KeySpicifications from './KeySpecifications'

const ProductSpicifications = () => {
  return (
   <>
   <article className='article_specifications w-100'>
   <SectionsHeader icon={<FeaturesIcon/>}  title="مشخصات" link=""/>
  <div className='speci_wrapper w-100'>
  
  <KeySpicifications className="indent" hastitle={false}/>

  </div>
   </article>
   </>
  )
}

export default ProductSpicifications