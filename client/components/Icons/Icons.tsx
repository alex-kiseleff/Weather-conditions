import React, { FC } from 'react';
import { IIcons } from '../../interfaces/interfaces';
import SpriteSVG from './icons.svg';

const Icons: FC<IIcons> = ({ name, classModify, title }) => {
    return (
        <svg
            className={`icon icon__${name} ${classModify}`}
            aria-labelledby={title}
        >
            <use xlinkHref={`${SpriteSVG}#icon-${name}`} />
        </svg>
    );
};

export default Icons;
