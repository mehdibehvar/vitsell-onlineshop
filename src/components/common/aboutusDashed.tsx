import Image from "next/image";
const AboutusDashed = () => {
  return (
    <div
      className={`aboutus_dashed_border d-none d-sm-flex align-items-center justify-content-center `}
    >
     
      <div className="inner p-4 d-flex align-items-center justify-content-center w-100 h-100">
        <div className="first_circle w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="image_wrapper  position-relative">
            <Image src="/assets/images/aboutbg.png" alt="vitsell-login" fill />
          </div>
        </div>
      </div>
      <div className="position-absolute w-100 h-100  clean_border"></div>
    </div>
  );
};

export default AboutusDashed;
