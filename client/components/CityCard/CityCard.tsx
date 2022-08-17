/**
 * @component CityCard - рендерит карточку города с названием и
 * данными о погоде.
 * @param {IData} props - данные с сервера или хранилища.
 * @returns {ReactElement}
 */
import React, { FC, MouseEvent, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../../context';
import { IData } from '../../interfaces/interfaces';
import NameCity from '../NameCity/NameCity';
import TemperatureBlock from '../TemperatureBlock/TemperatureBlock';
import './CityCard.scss';

const CityCard: FC<IData> = (props) => {
    const { state, setState } = useContext(Context);
    const { favourites } = state;

    const handlerClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const newCurrentCity = favourites.filter(
            (item: IData) => item.id === target.id
        );

        setState({ ...state, currentCity: newCurrentCity[0] });
    };

    return (
        <li className={'city-card'}>
            <NavLink
                onClick={handlerClick}
                className={'city-card__link'}
                to={'/details'}
                id={props.id}
            >
                <NameCity {...props} />
                <TemperatureBlock {...props} />
            </NavLink>
        </li>
    );
};

export default CityCard;
