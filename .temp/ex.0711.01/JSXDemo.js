import React from 'react';

function JSXDemo() {
  return (
    <>
      <h1>JSX語法呈現</h1>
      <h2>Number</h2>
      {123 - 1}
      {NaN}
      <h2>String</h2>
      {'Hello World'}
      <br />
      {`Hello World${124 - 1}`}
      <h2>Boolean(不會呈現)</h2>
      {true}
      {false}
      <h2>null(不會呈現)</h2>
      {null}
      <h2>undefined(不會呈現)</h2>
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 4]}
      <br />
      {[1, 2, 3, 4].join('')}
    </>
  );
}

export default JSXDemo;
