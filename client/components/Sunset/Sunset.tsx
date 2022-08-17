/**
 * @component Sunset - рендерит строку с временем заката.
 * @param {string} sunset - время заката.
 * @returns {ReactElement}
 */
import React, { FC } from 'react';
import { IData } from '../../interfaces/interfaces';
import './Sunset.scss';

const Sunset: FC<IData> = ({ sunset }) => {
    return (
        <>{sunset && <div className={'sunset'}>{`Закат в ${sunset}`}</div>};</>
    );
};

export default Sunset;
