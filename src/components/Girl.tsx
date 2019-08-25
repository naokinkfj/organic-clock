import React from 'react';
import './Girl.css';

export interface Props {
  name: string;
  age?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const suffix = (n1: number) => {
  const n2 = n1 % 10;
  const n3 = n1 % 100;

  let sx = `${n1}th`;
  if (n2 === 1 && n3 !== 11) {
    sx = `${n1}st`;
  } else if (n2 === 2 && n3 !== 12) {
    sx = `${n1}nd`;
  } else if (n2 === 3 && n3 !== 13) {
    sx = `${n1}rd`;
  }
  return sx;
}

const Girl: Function = ({ name, age = 1, onIncrement, onDecrement }: Props) => {
  if (age <= 0) { throw new Error('Not even born'); }
  return (
    <div className="wrapper">
      <div className="message">
        Hi, {name}. It's your {suffix(age)} birthday.
      </div>
      <div className="buttons">
        <button className="btn" onClick={onDecrement}>
          -
        </button>
        <button className="btn btn-plus" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Girl;
