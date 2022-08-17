/**
 * @component Main - главная страница приложения, с поиском и
 * подсказками.
 */
import React from 'react';
import { IIcons } from '../../interfaces/interfaces';
import Hint from '../Hint/Hint';
import Icons from '../Icons/Icons';
import Favourites from '../Favourites/Favourites';
import InputSearch from '../InputSearch/InputSearch';
import './WithoutFavourites.scss';

const propsForHintInputSearch = {
    textOne: 'Начните вводить город, ',
    textTwo: 'например, ',
    textButton: 'Ижевск',
    idLabel: 'input-search',
};

const propsForHintFavourites = {
    textOne: 'Используйте значок "закладки",',
    textTwo: 'чтобы закрепить город на главной',
    idLabel: 'favorite',
};

const propsIconArrow = {
    idToSprite: 'arrow',
    mainClass: 'arrow',
    parentClassForMix: 'without-favourites',
    ariaTitle: 'иконка "стрелка"',
};

const propsIconFavourites: IIcons = {
    idToSprite: 'favourites',
    mainClass: 'icon-favourites',
    parentClassForMix: 'without-favourites',
    ariaTitle: 'иконка "избранное"',
};

const WithoutFavourites = () => {
    return (
        <div className={'without-favourites'}>
            <InputSearch />
            <div className={'without-favourites__wrap-hint'}>
                <Icons {...propsIconArrow} />
                <Hint {...propsForHintInputSearch} />
            </div>
            <div className={'without-favourites__wrap-hint'}>
                <Hint {...propsForHintFavourites} />
                <Favourites {...propsIconFavourites} />
            </div>
        </div>
    );
};

export default WithoutFavourites;
