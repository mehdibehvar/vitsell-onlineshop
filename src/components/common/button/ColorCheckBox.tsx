import  { useState } from 'react'
import { TickCircleIcon} from '../../icons/icons';

const ColorCheckBox = ({className}:{className:string}) => {
    const [check, setCheck] = useState(false);
    const handleChecked=()=>{ 
        setCheck((prev)=>!prev) 
    }

    
  return (
    <div onClick={handleChecked}  className={`color_checkbox ${className} ${check?"isChecked":""}`}>
    <input   type="checkbox" checked={check} />
    <span className="checkmark"><TickCircleIcon/></span>
  </div>
  )
}

export default ColorCheckBox