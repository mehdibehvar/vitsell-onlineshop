import { useState } from "react";
import { Button } from "reactstrap";
import ProductIntroDescription from "./ProductIntroDescription";
import ProductSpicifications from "./ProductSpicifications";


const ProductIntroNavSection = () => {
  const [navSelected, setnavSelected] = useState<number>(1);
  return (
    <>
      <nav className="intro_navbar d-flex justify-content-start "> 
        <Button
          className={`nav p-0 ${navSelected===1?"active_nav":''}`}
          outline
          onClick={() => setnavSelected(1)}
          active={navSelected === 1}
        >
          محصول معرفی
        </Button>
        <Button
          outline
          className={`nav p-0 ${navSelected===2?"active_nav":''}`}
          onClick={() => setnavSelected(2)}
          active={navSelected === 2}
        >
          مشخصات
        </Button>
        <Button
          className={`nav p-0 ${navSelected===3?"active_nav":''}`}
          outline
          onClick={() => setnavSelected(3)}
          active={navSelected === 3}
        >
          دیدگاهها
        </Button>
      </nav>
      {navSelected===1&&<ProductIntroDescription/>}
      {navSelected===2&&<ProductSpicifications/>}
    </>
  ); 
};

export default ProductIntroNavSection;
