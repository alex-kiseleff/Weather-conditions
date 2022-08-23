/**
 * @component Favourites - рендерит кликабельный значок
 * "избранное" с input type=checkbox.
 * @param {IIcons} props - реквизиты для картинки.
 * @returns {ReactElement}
 */
import React, { FC, ReactElement, useContext } from 'react';
import StateContext from '../../contexts/stateContext';
import { IIcons } from '../../interfaces/interfaces';
import Icons from '../Icons/Icons';
import './Favourites.scss';

const Favourites: FC<IIcons> = (props): ReactElement => {
    const { state, setState } = useContext(StateContext);

    if (!state.currentCity) {
        return <></>;
    }

    const {
        currentCity: { checked },
    } = state;
    const { parentClassForMix, mainClass } = props;

    const handlerChecked = (e: { target: { checked: boolean } }) => {
        const newState = { ...state };
        const { currentCity } = newState;
        Object.defineProperty(currentCity, 'checked', {
            value: e.target.checked,
        });

        setState({
            ...newState,
        });
    };

    return (
        <label
            className={`favourites ${parentClassForMix}__${mainClass}`}
            htmlFor={'favourites'}
        >
            <input
                onChange={handlerChecked}
                className={'favourites__input'}
                type={'checkbox'}
                checked={checked}
                id={'favourites'}
            />
            <Icons {...props} />
        </label>
    );
};

export default Favourites;
