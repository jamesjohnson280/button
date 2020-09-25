import React from 'react';
import './Button.css';

const Button = (props) => {
  const label = props.label || props.children;
  const classes = props.variant ? `btn btn--${props.variant}` : 'btn';
  return (
    <button onClick={props.onClick} className={classes} >{label}</button>
  );
}

export default Button; 
