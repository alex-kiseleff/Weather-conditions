/**
 * @component Hint - рендерит текстовые подсказки.
 * @param {string} textOne - первый текст.
 * @param {string} textTwo - второй текст.
 * @param {string} textButton - текст кнопки, если она есть.
 * @returns {ReactElement}
 */
import React, { FC, MouseEvent, ReactElement, useContext } from 'react';
import HintContext from '../../contexts/HintContext';
import { IHint } from '../../interfaces/interfaces';
import './Hint.scss';

const Hint: FC<IHint> = ({ textOne, textTwo, textButton }): ReactElement => {
    const { setHint } = useContext(HintContext);

    const handlerClick = (e: MouseEvent) => {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        setHint(target.value);
    };
    return (
        <div className={'hint'}>
            <p className={'hint__text'}>{textOne}</p>
            <p className={'hint__text'}>
                {textTwo}
                <button
                    onClick={handlerClick}
                    value={textButton}
                    className={`hint__button ${
                        textButton ? '' : 'hint__button--hidden'
                    }`}
                >
                    {textButton}
                </button>
            </p>
        </div>
    );
};

export default Hint;
