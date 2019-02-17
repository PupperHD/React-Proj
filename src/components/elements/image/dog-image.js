import React from 'react';
import styles from './index.css';

export const Image = ({src, className}) => (
    <img
        src={src}
        className={className}
    />
);

export default Image;