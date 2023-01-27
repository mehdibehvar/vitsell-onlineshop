import React from 'react'
import { Col } from 'reactstrap'

import { FireIcon } from './icons/icons'
import { PRODUCTSDATA } from "./constant/data";
import ProductsCard from './common/ProductsCard';
const ProductsGrid = () => {
  return (

<>
{PRODUCTSDATA.map((item, index) => (
          <Col key={index}  xs='12' sm="3">
        <ProductsCard item={item}/>
           </Col>
      ))}
</>
  )
}

export default ProductsGrid