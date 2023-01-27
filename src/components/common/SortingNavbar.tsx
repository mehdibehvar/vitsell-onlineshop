import { CheapestIcon, ExpensIcon, FireIcon, NewIcon } from "../icons/icons"

const SortingNavbar = () => {
  return (
    <nav className="sorting_navbar">
        <div className="sorting">
           <span className="title">مرتب سازی بر اساس:</span>
         <span>
          <span className="icons"><FireIcon color="#7D7D7D"/></span>
          <span>پرفروشترین ها</span>
          </span>
         <span>
          <span className="icons"><NewIcon/></span>
          <span>جدیدترینها</span>
          </span>
         <span>
          <span className="icons"><CheapestIcon/></span>
          <span>ارزانترینها</span>
          </span>
         <span>
          <span className="icons"><ExpensIcon/></span>
          <span>گرانترینها</span>
          </span>
           
        </div>
        <div className="products_number">
          <span>12</span>
          <span>محصول</span>
          </div>
    </nav>
  )
}

export default SortingNavbar