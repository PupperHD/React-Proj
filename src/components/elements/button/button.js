import React from 'react';

export const Button = ({text, onClick, type, disabled, className}) => (
    <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={'border-none ' + className}
    >
        {text}
    </button>
);

export default Button;