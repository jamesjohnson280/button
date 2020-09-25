import React from 'react';
import './Button.css';

function Button(props) {
  const label = props.label || props.children
  let styles = 'btn';
  if (props.variant) {
    styles = `${styles} btn--${props.variant}`;
  }
  return (
    <button onClick={props.onClick} className={styles}>{label}</button>
  );
}

export default Button; 