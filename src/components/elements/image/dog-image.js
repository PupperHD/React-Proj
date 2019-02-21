import React from 'react';

export const Image = ({src, className}) => (
    <img
        src={src}
        className={className}
        alt='some alt'
    />
);

export default Image;