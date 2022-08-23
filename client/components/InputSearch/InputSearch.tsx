/**
 * @component InputSearch - создает поле ввода (элемент input) для поиска,
 * делает запросы на сервер.
 */
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HintContext from '../../contexts/HintContext';
import StateContext from '../../contexts/stateContext';
import { IData } from '../../interfaces/interfaces';
import { fetchQuery } from '../../pages/api/fetchQuery';
import { updateCurrentCity } from '../../utilites/updateCurrentCity';
import './InputSearch.scss';

const InputSearch = () => {
    const navigate = useNavigate();
    const { state, setState } = useContext(StateContext);
    const { favourites } = state;
    const { hint, setHint } = useContext(HintContext);

    const handlerChange = (e: { target: { value: string } }) => {
        setHint(e.target.value);
    };

    const getData = async () => {
        const data = await fetchQuery(hint);
        const newCurrentCity = updateCurrentCity(data);

        if (newCurrentCity) {
            const index = favourites.findIndex(
                (item: IData) => item.id === newCurrentCity.id
            );
            if (index !== -1) {
                Object.defineProperty(newCurrentCity, 'checked', {
                    value: true,
                });
                favourites.splice(index, 1, newCurrentCity);
                setHint('');
                navigate('/details');
            }
            setState({
                ...state,
                currentCity: newCurrentCity,
            });
        }
    };

    useEffect(() => {
        if (hint.length > 3) {
            getData();
        }
    }, [hint]);

    return (
        <div className={'input-search'}>
            <input
                onChange={handlerChange}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') e.preventDefault();
                }}
                value={hint}
                className={'input-search__input'}
                type={'text'}
                id={'input-search'}
                autoComplete={'off'}
            />
            <label className={'input-search__label'} htmlFor={'input-search'}>
                {!hint && 'Укажите город'}
            </label>
        </div>
    );
};

export default InputSearch;
