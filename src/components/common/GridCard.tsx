import Image from 'next/image'
import React from 'react'
import { ICardData } from '../../../types'

const GridCard =({card}:{card:ICardData}) => {
  return (
    <div className='grid_card'>
        <Image
        src={card.url}
        alt={card.alt}
        width={98}
        height={98}
        />
        <span className='card_subtitle'>{card.subtitle}</span>
    </div>
  )
}

export default GridCard