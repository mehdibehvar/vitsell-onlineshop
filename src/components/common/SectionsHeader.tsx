import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";
import { ReactElement } from "react";
interface IProps {
  icon?: ReactElement;
  title: string;
  link?: string;
  commentNumber?:number
}
const SectionsHeader = ({ icon, title, link,commentNumber }: IProps) => {
  return (
    <header className="sections_header px-0">
      <div className="d-flex align-items-center justify-content-start">
        {" "}
        <div className="d-flex align-items-center justify-content-between ">
          <span className="discount_icon">{icon}</span>
          <h4 className="m-0 p-0 head_title">{title}</h4>
          {commentNumber&&<span style={{color:" #7D7D7D"}} className="comment_number">({commentNumber} {" "}
          نظر)</span>}
        </div>
      </div>
      <div className="space_border"></div>
      {link && (
        <Link href={link} className="see_all">
          <span>مشاهده همه </span>
          <span className="shevron_icon me-2">
            <BsChevronLeft />
          </span>
        </Link>
      )}
    </header>
  );
};

export default SectionsHeader;
