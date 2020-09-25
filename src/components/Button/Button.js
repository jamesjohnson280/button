import React from 'react';
import './Button.css';

const Button = (props) => {
  console.log('props', props);
  const label = props.label || props.children;
  let classes = props.variant ? `btn btn--${props.variant}` : 'btn';
  if (props.disableShadow) { classes = `${classes} btn--disableshadow`; }
  return (
    <button onClick={props.onClick} className={classes} disabled={props.disabled} >{label}</button>
  );
}

export default Button; 
