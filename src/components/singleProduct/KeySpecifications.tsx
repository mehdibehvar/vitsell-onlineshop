import React from 'react'

const KeySpicifications = ({hastitle}:{hastitle:boolean}) => {
  return (
    <div className="key_properties d-flex flex-column">
    {hastitle&&<h5>ویژگی های کلیدی</h5>}
    <ul className="properties_list d-flex flex-column">
      <li>
        <span className="property"> فن آوری صفحه نمایش :</span>
        <span className="property_value">Liquid Retina</span>
      </li>
      <li>
        <span className="property"> فن آوری صفحه نمایش :</span>
        <span className="property_value">Liquid Retina</span>
      </li>
      <li>
        <span className="property"> فن آوری صفحه نمایش :</span>
        <span className="property_value">Liquid Retina</span>
      </li>
      <li>
        <span className="property"> فن آوری صفحه نمایش :</span>
        <span className="property_value">Liquid Retina</span>
      </li>
      <li>
        <span className="property">اقلام همراه:</span>
        <span className="property_value">
          {" "}
          : دفترچه‌ راهنما، شارژر، کابل USB
        </span>
      </li>
    </ul>
  </div>
  )
}

export default KeySpicifications