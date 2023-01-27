import { useRef } from "react"
import { Col, Container, Row } from "reactstrap";
import { categoriesData } from "../../constant/data"
import { CategoriesLink } from "./CategoriesLink"


export const DropDownNavbar = () => {
    const listRef=useRef<HTMLUListElement>(null);
   
    const handleLeaveMouse=()=>{
      listRef.current?.firstElementChild?.classList.add("active_link")
    }
    
  return (
   <div className="dropdown_navbar_category">
 
        <aside>
        <ul onMouseLeave={handleLeaveMouse} className="categoryies_list" ref={listRef}>
            {categoriesData.map((item,index)=><CategoriesLink index={index} key={index} category={item}/>)}
        </ul>
      </aside>
    </div>
  )
}
