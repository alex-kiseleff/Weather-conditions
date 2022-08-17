/**
 * @component NameCity - рендерит название города.
 * @param {string} city - строка с названием города.
 */
import React, { FC } from 'react';
import { IData } from '../../interfaces/interfaces';
import './NameCity.scss';

const NameCity: FC<IData> = ({ city }) => {
    return <h2 className={'name-city'}>{city}</h2>;
};

export default NameCity;
