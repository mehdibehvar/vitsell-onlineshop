import React from 'react'
interface IProps{
    placeholder?:string,
    label?:string,
    className?:string,
    icon?:JSX.Element
}
const Input = ({placeholder,label,className,icon}:IProps) => {
  return (
    <div className={`common_input position-relative ${className}`}>
        <label className='mb-2 fs-14'>{label}</label>
        <input className='fs-12'  placeholder={`${placeholder}`}></input>
        {icon&&<span className='icon position-absolute '>{icon}</span>}
    </div>
  )
}

export default Input