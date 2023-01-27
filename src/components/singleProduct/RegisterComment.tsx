import Button from "../common/button/Button";
import SectionsHeader from "../common/SectionsHeader";
import { CommentIcon, GrayStarIcon } from "../icons/icons";

const RegisterComment = () => {
  return (
    <form className="register_comment w-100">
      <div className="title d-flex justify-content-between align-items-center w-100">
        <div className="w-100 regist_title">
          <SectionsHeader title="ثبت نظر" link="" icon={<CommentIcon />} />
        </div>

    <fieldset className="d-flex justify-content-between w-100">
    <div className="d-flex">
      <input className="radio_input" type="radio" id="recommend" name="drone" value="huey"
            />
      <label htmlFor="recommend">کالا را پیشنهاد می کنم</label>
    </div>
    <div className="d-flex">
      <input className="radio_input" type="radio" id="notsure" name="drone" value="huey"
            />
      <label htmlFor="notsure">مطمئن نیستم</label>
    </div>
    <div className="d-flex">
      <input className="radio_input" type="radio" id="notrecommend" name="drone" value="huey"
            />
      <label htmlFor="notrecommend">کالا را پیشنهاد نمی کنم</label>
    </div>

    </fieldset>

      </div>
      <div className="comment_text_area">
        <textarea className="textarea_comment w-100"  placeholder="لطفا نظر خود را بیان کنید">

        </textarea>
      </div>
      <div className="user_score d-flex justify-content-end gap-3">
        <div className="stars  d-none d-sm-flex">
             <span className="ms-4">امتیاز شما به این محصول :</span>
          <div className="stars_wrapper">
             <span><GrayStarIcon/></span>
             <span><GrayStarIcon/></span>
             <span><GrayStarIcon/></span>
             <span><GrayStarIcon/></span>
             <span><GrayStarIcon/></span>
          </div>
        </div>
        <div className="submit">
          <Button type="submit" className="comment_submit d-flex align-items-center justify-content-center">ثبت نظر</Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterComment;
