import React from "react";
import Card from "../common/Card";
import HorizCard from "../common/horizCard";
import { AMAZINGDATA } from "../constant/data";

const AmazingGridSection = () => { 
  return (
    <div className="amazing_grid_section">
      {AMAZINGDATA.map((item, index) => (
    <HorizCard item={item} key={index}/>
      ))}
    </div>
  );
};

export default AmazingGridSection;
//    <Card flexDir="row" key={index} item={item} width={88} height={88} Icon={<FireIcon color="#D72339"/>}/>