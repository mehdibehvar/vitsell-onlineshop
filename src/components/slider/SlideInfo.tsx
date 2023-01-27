
import { Iimagedata } from '../../../types';
import Button from "../common/button/Button";
interface IProps{
    item:Iimagedata,
    InfoClass:string
}
const SlideInfo = ({item,InfoClass}:IProps) => {
  return (
    <div className={InfoClass}>
    <h4>{item.title}</h4>
    <div className="price">
      <span>
        {item.price} <span className="toman">تومان</span>
      </span>
    </div>
    <div className="discount">
      <Button type="text" className="discount_bag">
        {item.percent}
      </Button>
      <span>{item.discount}</span>
    </div>
  </div>
  )
}

export default SlideInfo