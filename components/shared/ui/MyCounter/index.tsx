
import React from "react";

interface MyCounterProps {
  count: number;
  handler: (type: "increment" | "decrement") => void;
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

export const MyCounter = ({ count, handler, setCounter }: MyCounterProps) => {
    const onChangeCounter = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCounter(Number(e.currentTarget.value));
    }
  return (
    <div className="w-full flex justify-between items-center gap-3">
      <span
        className="counter"
        onClick={() => handler("decrement")}
      >
        -
      </span>
      <input className="countNumber" type="number" value={count || 1} onChange={onChangeCounter} min={1} max={10000} />
      <span
        className="counter"
        onClick={() => handler("increment")}
      >
        +
      </span>
    </div>
  );
};
