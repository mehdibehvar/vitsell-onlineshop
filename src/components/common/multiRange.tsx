import Button from "./button/Button";
import { useState,useEffect,useCallback } from "react";
import { useRef } from "react";
import classNames from "classnames";
interface IProps{
    min: number,
    max:number,
    onChange:({min,max}:{min:number,max:number})=>void
}

const MultiRangeSlider = ({ min, max,onChange}:IProps) => {
const [minVal, setMinVal] = useState(min);
const [maxVal, setMaxVal] = useState(max);
const minValRef = useRef<HTMLInputElement>(null);
const maxValRef = useRef<HTMLInputElement>(null);
const range = useRef<HTMLDivElement>(null);
// Convert to percentage
const getPercent = useCallback(
    (value:number) => Math.round(((value - min) / (max - min)) * 100), [min, max]
);

// Set width of the range to decrease from the left side
useEffect(() => {
  if (maxValRef.current) {
    const minPercent = getPercent(minVal);//0%
    const maxPercent = getPercent(+maxValRef.current.value); ///100%

    if (range.current) {
      range.current.style.right = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }
}, [minVal, getPercent]);

// Set width of the range to decrease from the right side
useEffect(() => {
  if (minValRef.current) {
    const minPercent = getPercent(+minValRef.current.value);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
     range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }
}, [maxVal, getPercent]);

// Get min and max values when their state changes
useEffect(() => {
    onChange({ min: minVal, max: maxVal });
}, [minVal, maxVal, onChange]);
  return (
    <>
      <li className="range_slider">
      <input
      type="range"
      min={min}
      max={max}
      value={minVal}
      ref={minValRef}
      onChange={(event) => {
        const value = Math.min(+event.target.value, maxVal - 1);
        setMinVal(value);
        event.target.value = value.toString();
      }}
      className={classNames("thumb thumb--zindex-3", {
        "thumb--zindex-5": minVal > max - 100
      })}
        />
      <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4 max_input"
        />
      
     
        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </li>
      <li>
        <div className="display">
          <span>از</span>
          <div>
            <span className="display_value">{minVal}</span>
            <span className="me-1">تومان</span>
          </div>
        </div>
      </li>
      <li>
        <div className="display">
          <span>تا</span>
          <div>
            <span className="display_value">{maxVal}</span>
            <span className="me-1">تومان</span>
          </div>
        </div>
      </li>
      <li>
        <Button type="submit" className="range_submit">
         <span> اعمال تغییرات</span>
        </Button>
      </li>
    </>
  );
};

export default MultiRangeSlider;
