import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ICardData } from '../../../types'

const GridCard =({card}:{card:ICardData}) => {
  return (
   <Link href={`/products/${card.subtitle}`}>
    <div className='grid_card'>
        <Image
        src={card.url}
        alt={card.alt}
        width={98}
        height={98}
        />
        <span className='card_subtitle'>{card.subtitle}</span>
    </div>
   </Link>
  )
}

export default GridCard