/**
 * @component PressureBlock - рендерит значок барометра и
 * строку с данными об атмосферном давлении.
 * @param {string} pressure - строка с данными об атм. давлении.
 * @returns {ReactElement}
 */
import React, { FC } from 'react';
import { IData } from '../../interfaces/interfaces';
import Icons from '../Icons';
import './PressureBlock.scss';

const propsIconsBarometer = {
    idToSprite: 'barometer',
    mainClass: 'icon-barometer',
    parentClassForMix: 'pressure-block',
    ariaTitle: 'значок барометра',
};
const PressureBlock: FC<IData> = ({ pressure }) => {
    return (
        <div className={'pressure-block'}>
            {pressure && <Icons {...propsIconsBarometer} />}
            {pressure && (
                <span
                    className={'pressure-block__text'}
                >{`${pressure} мм рт.ст.`}</span>
            )}
        </div>
    );
};

export default PressureBlock;
