/**
 * @component Header - голова сайта.
 */
import React from 'react';
import Icons from '../Icons';
import './Header.scss';

const propsIcons = {
    name: 'logo',
    classModify: 'logo',
    title: 'логотип приложения',
};
const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header__container'}>
                <Icons {...propsIcons} />
                <h1 className={'header__title'}>{'WeatherCheck'}</h1>
            </div>
        </header>
    );
};

export default Header;
