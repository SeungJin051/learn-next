import React from 'react';

export default function ProductHeader(props) {
  return <h1>{props.title}</h1>;
}

const a = {
  msg: 'hi',
};

const { msg } = a;

const b = msg;

console.log(b);
