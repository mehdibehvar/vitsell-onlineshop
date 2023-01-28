import React from 'react'
import { AddIcon } from '../icons/icons'
import Button from './button/Button'
import Price from './Price'

const AddToCard = () => {
  return (
<div className='add_to_card w-100 d-flex flex-column gap-3'>
   <div className="discount_price">
    <Price price={"۴,۳۴۳,۰۰۰"} percent={"۳۴٪ "} discount={"۴,۳۴۳,۰۰۰"}/>
    </div>
    <div className="addto_basket">
     <Button className="addto_basket_button" type="button">
       <span><AddIcon/></span>
       <span>افزودن به سبد خرید</span>
     </Button>
    </div>
</div>
  )
}

export default AddToCard