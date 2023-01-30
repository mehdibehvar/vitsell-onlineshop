import React from 'react'
import Image from "next/image";
const DashedCircle = ({className,imageSrc}:{className:string,imageSrc?:string}) => {
  return (
    <div className={`${className} d-flex align-items-center justify-content-center`}>
        <div className="inner d-flex align-items-center justify-content-center w-100 h-100">
            {imageSrc&&<div className="image_wrapper  position-relative">
            <Image
              src={`${imageSrc}`}
              alt="vitsell-login"
              fill
            />
          </div>}
          
        </div>
      </div>
  )
}

export default DashedCircle