/**
 * @component Header - шапка сайта.
 */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Icons from '../Icons';
import './Header.scss';

const propsIcon = {
    idToSprite: 'logo',
    mainClass: 'logo',
    parentClassForMix: 'header',
    ariaTitle: 'логотип приложения',
};

const Header = () => {
    const location = useLocation();
    let classModify = '';

    if (location.pathname === '/details') {
        classModify = 'header--hidden';
    }

    return (
        <header className={`header ${classModify}`}>
            <div className={'header__container'}>
                <Icons {...propsIcon} />
                <h1 className={'header__title'}>{'WeatherCheck'}</h1>
            </div>
        </header>
    );
};

export default Header;
