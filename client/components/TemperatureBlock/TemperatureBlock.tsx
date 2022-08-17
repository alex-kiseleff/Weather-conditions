/**
 * @component TemperatureBlock - рендерит блок с показаниями температуры
 * в градусах по цельсию и картинкой с изображением стихии.
 * @param {string} degrees - показания в градусах.
 * @param {string} nameIcon - стилевой класс картинки.
 * @param {string} ariaTitle - описание картинки для аудиоридера.
 * @returns {ReactElement}
 */
import React, { FC } from 'react';
import { IData } from '../../interfaces/interfaces';
import Icons from '../Icons';
import './TemperatureBlock.scss';

const TemperatureBlock: FC<IData> = (props) => {
    const { degrees } = props;

    return (
        <div className={'temperature-block'}>
            <div className={'temperature-block__wrap-degrees'}>
                <span>{degrees}</span>
                {degrees && <span>{'\u00b0'}</span>}
            </div>
            <div className={'temperature-block__wrap-icons'}>
                <Icons {...props} />
            </div>
        </div>
    );
};

export default TemperatureBlock;
