import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'reactstrap'
import SectionsHeader from '../common/SectionsHeader'
import { FavoritesIcon } from '../icons/icons'
import GridSection from './GridSection'

const FavoriteSection = () => { 
  return (
   <Row className='favorite_section'>
    <Col xs="12" sm="8" md="8" lg="8">
    <SectionsHeader link='' title='دسته بندی های محبوب' icon={<FavoritesIcon/>}/>
    <GridSection/>
    </Col>
    <Col xs="12" sm="4" md="4" lg="4">
        <div className='card_wrapper d-none d-sm-block'>
            <Image
            src="/assets/images/cart_8 [Converted]-01 2.png"
            alt='vitsell'
            width={399}
            height={368}
            />
        </div>
    </Col>

   </Row>
  )
}

export default FavoriteSection