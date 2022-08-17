/**
 * @component Info - рендерит строку с данными о погоде.
 * @param {string} info - строка данных.
 * @returns {ReactElement}
 */
import React, { FC } from 'react';
import { IData } from '../../interfaces/interfaces';
import './Info.scss';

const Info: FC<IData> = ({ info }) => {
    return <p className={'info'}>{info}</p>;
};

export default Info;
