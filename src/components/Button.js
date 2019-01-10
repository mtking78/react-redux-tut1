import React from 'react';

// Refactored button to be reusable component:
const ButtonInline = ({
  onClick,
  type= 'button',
  children
}) =>
  <button
    type={type}
    className="button-inline"
    onClick={onClick}
  >
    {children}
  </button>

// Another more abstract Button component that doesn’t share the button-inline CSS class.
const Button = ({
  onClick,
  className,
  type= 'button',
  children
}) =>
  <button
    type={type}
    className={className}
    onClick={onClick}
  >
    {children}
  </button>

export default Button;
export {
  ButtonInline
};