import React from 'react'
import { TPhoneIcon } from './icons/icons'
interface IProps{
    title:string,
    icon:JSX.Element;
    text:string,
    textdir:string
}
const Contact = ({title,icon,text,textdir}:IProps) => {
  return (
    <div className="contact d-flex flex-column w-100">
    <div>
      <span>
        {icon}
      </span>
      <span className="me-1 fs-14 fw-bold brand-secondary">{title}</span>
    </div>
    <div className={`fs-14 fw-bold text-black-3 d-flex justify-content-${textdir}`}>
      {text}
    </div>
  </div>
  )
}

export default Contact