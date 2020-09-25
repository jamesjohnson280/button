import React from 'react';
import './Button.css';

function Button(props) {
  const label = props.label || props.children
  let styles = '';
  if (props.variant) {
    styles = `btn-${props.variant}`;
  }
  return (
    <button onClick={props.onClick} className={styles}>{label}</button>
  );
}

export default Button; 