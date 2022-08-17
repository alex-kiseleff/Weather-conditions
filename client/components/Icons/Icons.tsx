/**
 * @component Icons - рендерит svg картинку из спрайта.
 * @param {string} idToSprite - id картинки, для обращения к ней в спрайте.
 * @param {string} mainClass - название основного класса картинки, для обращения к ней
 * из css файла.
 * @param {string} parentClassForMix - дополнительный родительский класс для микширования.
 * @param {string} ariaTitle - подсказка для аудиоридера.
 * @param {string} classModify - модифицирующий класс для стилей.
 * @returns {ReactElement}
 */
import React, { FC } from 'react';
import { IIcons } from '../../interfaces/interfaces';
import SpriteSVG from './icons.svg';

const Icons: FC<IIcons> = ({
    idToSprite,
    mainClass,
    parentClassForMix = '',
    ariaTitle = '',
    classModify = '',
}) => {
    return (
        <svg
            className={`${mainClass} ${parentClassForMix}__${mainClass} ${classModify} icons`}
            aria-labelledby={ariaTitle}
        >
            <use xlinkHref={`${SpriteSVG}#${idToSprite}`} />
        </svg>
    );
};

export default Icons;
