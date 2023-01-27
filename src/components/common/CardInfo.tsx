import { Iimagedata } from "../../../types";
import Button from "../common/button/Button";
interface IProps {
  item: Iimagedata;
  InfoClass: string;
}
const CardInfo = ({ item, InfoClass }: IProps) => {
  return (
    <div className={InfoClass}>
      <div className="title_wrapper">
        {" "}
        <span className="title">{item.title}</span>
      </div>
      <div className="price">
        <span>
          {item.price} <span className="toman">تومان</span>
        </span>
      </div>
      {item.discount && (
        <div className="discount">
          <Button type="text" className="discount_bag">
            {item.percent}
          </Button>
          <span>{item.discount}</span>
        </div>
      )}
    </div>
  );
};

export default CardInfo;
