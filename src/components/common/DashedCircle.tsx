import React from "react";

const DashedCircle = ({ className }: { className: string }) => {
  return (
    <>
      <div className={`${className}`}></div>
      {className === "big_dashed_border" && <div className="inner"></div>}
      {className === "litle_dashed_border" && (
        <div className="little_inner"></div>
      )}
    </>
  );
};

export default DashedCircle;
