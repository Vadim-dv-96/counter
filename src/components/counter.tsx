import { BtnPropsType, DispleyPropsType } from "./counter/types";

const maxValue = 5;

export function Counter(props: BtnPropsType) {
  return (
    <div>
      <Display inc={props.inc} />
      <Btn inc={props.inc} incValue={props.incValue} reset={props.reset} />
    </div>
  );
}

function Display(props: DispleyPropsType) {
  return (
    <div>
      <h3 className={props.inc === maxValue ? "and" : "number"}>
        
        {props.inc}
      </h3>
    </div>
  );
}

function Btn({ inc, incValue, reset }: BtnPropsType) {
  return (
    <div>
      <button
        disabled={inc === maxValue ? true : false}
        onClick={incValue}
        className="btn1"
      >
        inc
      </button>
      <button disabled={!inc ? true : false} onClick={reset} className="btn2">
        reset
      </button>
    </div>
  );
}
