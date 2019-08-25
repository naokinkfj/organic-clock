import React from 'react';
import './Girl.css';

export interface PropsType {
  name: string;
  age?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const suffix: Function = (n1: number): string => {
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

const judge: Function = (age: number): string => (age >= 18) ? 'enter' : 'not enter';

const Girl: Function = ({ name, age = 1, onIncrement, onDecrement }: PropsType) => (
  <div className="girl-wrapper">
    <h2>Girl</h2>
    <div className="girl-message">
      See if {name} can enter the party.<br />
      Hi, {name}. It's your {suffix(age)} birthday.
      You may {judge(age)} the party.
    </div>
    <div className="girl-buttons">
      <button className="girl-btn" onClick={onDecrement}>
        -
      </button>
      <button className="girl-btn girl-btn-plus" onClick={onIncrement}>
        +
      </button>
    </div>
  </div>
);

export default Girl;
