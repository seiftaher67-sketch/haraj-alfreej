import React from 'react';

/**
 * ClearBlackButton
 * Props:
 * - children: button content
 * - className: additional classes
 * - strong: boolean to enable stronger variant
 * - onClick: click handler
 * - type: button type
 */
const ClearBlackButton = ({ children, className = '', strong = false, onClick, type = 'button' }) => {
  const classes = `clear-black-button ${strong ? 'strong' : ''} ${className}`.trim();
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default ClearBlackButton;
