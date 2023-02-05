import LoginCard from "../../components/common/LoginCard";
import DashedCircle from "../../components/common/DashedCircle";
import {  Row } from "reactstrap";
import FluidLayout from "../../components/layouts/FluidLayout";
import Image from "next/image";


const Login = () => {
  return (
  <>
    <section className="Login_desktop bg-main w-100 vh-100 d-flex align-items-center justify-content-around d-none d-sm-flex">
    <div className="card_wrapper ">
    <LoginCard/>
    </div>
     <DashedCircle className="big_dashed_border" />
     <DashedCircle className="litle_dashed_border"/>
          <div className="image_wrapper d-flex justify-content-center position-relative">
            <Image
              src="/assets/images/loginphoto.png"
              alt="vitsell-login"
               width={467}
              height={430}
            />
          </div>
    </section>

      <section className="d-block d-sm-none">
  <FluidLayout>
    <Row>
    <section className="d-flex justify-content-center px-3 py-4 w-100">
    <LoginCard/>
    </section>
    </Row>
  </FluidLayout>
      </section>

  </>
  );
};

export default Login;
