import { useState,useEffect } from "react";
import { Button } from "reactstrap";
import ProductIntroDescription from "./ProductIntroDescription";
import ProductSpicifications from "./ProductSpicifications";


const ProductIntroNavSection = () => {
  const [navSelected, setnavSelected] = useState<number|null>(null);
useEffect(() => {
if (navSelected===1) {
  window.scroll({
    top: 1000,
    behavior: 'smooth'
  });
}
if (navSelected===2) {
    window.scroll({
      top: 1350,
      behavior: 'smooth'
    });
}
if (navSelected===3) {
  window.scroll({
    top: 1600,
    behavior: 'smooth'
  });
}

}, [navSelected]);


  return (
    <>
      <nav className="intro_navbar d-flex justify-content-start"> 
        <div
          className={`nav  ${navSelected===1?"active_nav":''}`}
          onClick={() => setnavSelected(1)}
        >
          محصول معرفی
          <div className="under_red_line mb-2"></div>
        </div>
        <div
       
          className={`nav p-0 ${navSelected===2?"active_nav":''}`}
          onClick={() => setnavSelected(2)}
         
        >
          مشخصات
          <div className="under_red_line mb-2"></div>
        </div>
        <div
          className={`nav p-0 ${navSelected===3?"active_nav":''}`}
          onClick={() => setnavSelected(3)}
        >
          دیدگاهها
          <div className="under_red_line mb-2"></div>
        </div>
      </nav>
    </>
  ); 
};

export default ProductIntroNavSection;
