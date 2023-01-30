
import LoginCard from "../../components/common/LoginCard";
import DashedCircle from "../../components/common/DashedCircle";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Container, Row } from "reactstrap";
import FluidLayout from "../../components/layouts/FluidLayout";


const Login = () => {
  return (
  <>
    <section className="Login_desktop bg-main w-100 vh-100 d-flex align-items-center d-none d-sm-flex">
    <div className="card_wrapper">
    <LoginCard/>
    </div>
     <DashedCircle className="big_dashed_border" imageSrc="/assets/images/loginphoto.png"/>
     <DashedCircle className="litle_dashed_border" imageSrc=""/>
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
