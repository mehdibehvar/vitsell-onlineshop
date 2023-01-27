import Button from "./button/Button";
interface IProps{
    price?:string,
    discount?:string,
    percent?:string,
}
const Price = ({price,percent,discount}:IProps) => {
  return (
    <div className="pricing">
    <div className="product_price">
        <span>{price}</span>
        <span>تومان</span>
    </div>
    <div className="product_dicount">
       <Button type="text" className="discount_bag">
        {percent}
      </Button>
      <span className="discount_value">{discount}</span>
    </div>
    </div>
  )
}

export default Price