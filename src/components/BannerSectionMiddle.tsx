
import React from 'react'
import { Col, Row } from 'reactstrap'

const BannerSectionMiddle = () => {
  return (
    <Row className='banner_section_middle gx-2'>
      <Col xs="12" sm="6" md="6" lg="6" xl="6">
        <div className='right_banner'>
        </div>
      </Col>
      <Col xs="12" sm="6" md="6" lg="6" xl="6">
      <div className='left_banner'>
      </div>
      </Col>
    </Row>
  )
}

export default BannerSectionMiddle;