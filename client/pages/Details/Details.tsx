/**
 * @component Details - страница детализированной информации
 * о погоде в городе.
 */
import React, { useContext, useEffect } from 'react';
import Context from '../../context';
import ButtonComeBack from '../../components/ButtonComeBack/ButtonComeBack';
import Info from '../../components/Info/Info';
import InputFavorite from '../../components/Favourites/Favourites';
import NameCity from '../../components/NameCity/NameCity';
import PressureBlock from '../../components/PressureBlock/PressureBlock';
import Sunset from '../../components/Sunset/Sunset';
import TemperatureBlock from '../../components/TemperatureBlock/TemperatureBlock';
import { IData, IIcons } from '../../interfaces/interfaces';
import './Details.scss';
import { useLocation } from 'react-router-dom';

const propsIconFavourites: IIcons = {
    idToSprite: 'favourites',
    mainClass: 'icon-favourites',
    parentClassForMix: 'details',
    ariaTitle: 'значок "избранное"',
};

const Details = () => {
    const location = useLocation();
    const { state, setState } = useContext(Context);
    const { currentCity, favourites } = state;
    const { checked } = currentCity;

    useEffect(() => {
        if (checked) {
            const uniqTest = favourites.some(
                (item: IData) => item.id === currentCity.id
            );
            if (uniqTest) {
                return;
            }
            favourites.push(currentCity);
        }
        if (!checked && location.pathname === '/details') {
            const newFavourites = favourites.filter(
                (item: IData) => item.id !== currentCity.id
            );
            console.log({ newFavourites });

            setState({ ...state, favourites: newFavourites });
        }
        console.log({ favourites });
    }, [checked]);

    // добавление модификатора checked для стилей
    propsIconFavourites.classModify = checked
        ? `${propsIconFavourites.mainClass}--checked`
        : '';

    return (
        <div className={'details'}>
            <div className={'details__wrap-buttons'}>
                <ButtonComeBack />
                <InputFavorite {...propsIconFavourites} />
            </div>
            <NameCity {...currentCity} />
            <Info {...currentCity} />
            <TemperatureBlock {...currentCity} />
            <PressureBlock {...currentCity} />
            <Sunset {...currentCity} />
        </div>
    );
};

export default Details;
