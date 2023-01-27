import React from "react";
import { Col, Row } from "reactstrap";
import Button from "./common/button/Button";
import { BazarIcon} from "./icons/icons";
const VitsellBanner = () => {
  return (
    <Row className="vitsell_section">
      <Col sm="12 d-flex justify-content-center align-items-end">
        <div className="vitsell_banner">
          <div className="mobile d-none d-sm-block"></div>
          <div className="banner_info">
            <h3 className="title m-0"> ویتسل را همیشه همراه داشته باشید!</h3>
            <div className="buttons_wrapper">
              <div className="bazarandmyket d-flex align-items-center justify-content-between">
              <Button className="bazar download_buttons px-2" type="button">
                <span>
                  <BazarIcon/>
                </span>
                <span className="text">دانلود از بازار</span>
              </Button>
              <Button className="myket download_buttons px-2" type="button">
         
                <span className="myket_icon">
                </span>
          
                <span className="text">دانلود از مایکت</span>
              </Button>
              </div>
              <Button className="android download_buttons px-2" type="button">
                <span className="android_icon">
                </span>
                <span className="text">دانلود مستقیم</span>
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default VitsellBanner;
