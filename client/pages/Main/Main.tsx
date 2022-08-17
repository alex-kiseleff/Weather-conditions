/**
 * @component Main - главная страница приложения.
 */
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WithFavourites from '../../components/WithFavourites/WithFavourites';
import WithoutFavourites from '../../components/WithoutFavourites/WithoutFavourites';
import Context from '../../context';
import './Main.scss';

const Main = () => {
    const navigate = useNavigate();

    const { state, setState } = useContext(Context);
    const { favourites } = state;

    useEffect(() => {
        console.log({ state });

        if (state.currentCity.id) {
            setState({ ...state, inputValue: '' });
            navigate('/details');
        }
    }, [state?.currentCity?.id]);

    return (
        <form className={'main'}>
            {favourites.length === 0 ? (
                <WithoutFavourites />
            ) : (
                <WithFavourites />
            )}
        </form>
    );
};

export default Main;
