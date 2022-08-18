/**
 * @component Favorite - страница c избранными городами.
 */
import React, { useContext } from 'react';
import Context from '../../context';
import { IData } from '../../interfaces/interfaces';
import CityCard from '../CityCard/CityCard';
import InputSearch from '../InputSearch/InputSearch';
import './WithFavourites.scss';

const WithFavourites = () => {
    const { state } = useContext(Context);
    const { favourites } = state;

    return (
        <div className={'with-favourites'}>
            <InputSearch />
            <ul className={'with-favourites__wrap-cards'}>
                {favourites?.map((item: IData) => {
                    return <CityCard key={item.id} {...item} />;
                })}
            </ul>
        </div>
    );
};

export default WithFavourites;
