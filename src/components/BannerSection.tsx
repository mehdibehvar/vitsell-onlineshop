
import React from 'react'
import { Col, Row } from 'reactstrap'

const BannerSection = () => {
  return (
    <Row className='banner_section gx-2 mt-3'>
      <Col xs="6" sm="6" md="6" lg="6" xl="6">
        <div className='right_banner'>
        </div>
      </Col>
      <Col xs="6" sm="6" md="6" lg="6" xl="6">
      <div className='left_banner'>
      </div>
      </Col>
    </Row>
  )
}

export default BannerSection