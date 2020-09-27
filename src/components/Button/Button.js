import React from 'react';
import Icon from '../Icon/Icon';
import './Button.css';

const Button = (props) => {
  console.log('props', props);
  const label = props.label || props.children;
  let classes = props.variant ? `btn btn--${props.variant}` : 'btn';
  if (props.disableShadow) { classes = `${classes} btn--disableshadow`; }
  if (props.size) { classes = `${classes} btn--${props.size}`; }
  return (
    <button onClick={props.onClick} className={classes} disabled={props.disabled} >
      {props.startIcon ? <Icon name={props.startIcon} /> : ''}
      {label}
      {props.endIcon ? <Icon name={props.endIcon} align='right' /> : ''}
    </button>
  );
}

export default Button; 
