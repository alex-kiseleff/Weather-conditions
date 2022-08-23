/**
 * @component Main - главная страница приложения.
 */
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HintContext from '../../contexts/HintContext';
import StateContext from '../../contexts/stateContext';
import WithFavourites from '../../components/WithFavourites/WithFavourites';
import WithoutFavourites from '../../components/WithoutFavourites/WithoutFavourites';
import './Main.scss';

const Main = () => {
    const navigate = useNavigate();

    const { setHint } = useContext(HintContext);
    const { state } = useContext(StateContext);
    const { favourites } = state;

    useEffect(() => {
        if (state?.currentCity?.id) {
            navigate('/details');
            setHint('');
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
