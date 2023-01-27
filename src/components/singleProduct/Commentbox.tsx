import { CommentIcon, NotRecommendIcon, NotSureIcon, RecommendIcon, UserIcon } from "../icons/icons";
interface IComment {
  date: string;
  text: string;
  recommend: string;
}
interface IProps {
  comment: IComment;
}
const Commentbox = ({ comment }: IProps) => {
    const {text,recommend,date}=comment;
  return (
    <li className="comment_box d-flex flex-column">
      <div className="comment_box_header mb-2 mb-sm-0">
        <h4 className="d-flex align-items-center">
          <span className="ms-2">
            <UserIcon />
          </span>
          <span>کاربر ویتسل</span>
        </h4>
        <span>
            {recommend==="notsure"? <NotSureIcon/>:recommend==="yes"?<RecommendIcon />:<NotRecommendIcon/>}
         
          <span className="me-2">کالا را پیشنهاد میکنم.</span>
        </span>
      </div>
      <p className="user_comment_text">{comment.text}</p>
      <div className="d-flex flex-row-reverse">
        <span className="comment_date">{comment.date}</span>
      </div>
    </li>
  );
};

export default Commentbox;
