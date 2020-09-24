import React from 'react';
import './Button.css';

function Button(props) {
  const label = props.label || props.children;
  return (
    <button onClick={props.onClick} >{label}</button>
  );
}

export default Button; 