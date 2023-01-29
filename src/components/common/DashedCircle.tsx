import React from 'react'
import Image from "next/image";
const DashedCircle = ({className}:{className:string}) => {
  return (
    <div className={`${className} d-flex align-items-center justify-content-center`}>
        <div className="inner d-flex align-items-center justify-content-center w-100 h-100">
            {className==="big_dashed_border"&&<div className="image_wrapper  position-relative">
            <Image
              src="/assets/images/loginphoto.png"
              alt="vitsell-login"
              fill
            />
          </div>}
          
        </div>
      </div>
  )
}

export default DashedCircle