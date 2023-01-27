import  { useState } from 'react'
import { TickCircleIcon} from '../../icons/icons';

const ColorCheckBox = ({className,color}:{color:string,className:string}) => {
    const [check, setCheck] = useState(false);
    const handleChecked=()=>{
        setCheck((prev)=>!prev)
    }
  return (
    <div onClick={handleChecked} className={`${className} ${check?"isChecked":""}`} style={{background:`${color}`}}>
    <input type="checkbox" checked={check} />
    <span className="checkmark"><TickCircleIcon/></span>
  </div>
  )
}

export default ColorCheckBox