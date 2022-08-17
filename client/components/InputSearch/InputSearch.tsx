/**
 * @component InputSearch - создает поле ввода (элемент input) для поиска,
 * делает запросы на сервер.
 */
import React, { useContext, useEffect } from 'react';
import Context from '../../context';
import { pressureConverter } from '../../utilites/pressureConverter';
import { timeConverter } from '../../utilites/timeConverter';
import './InputSearch.scss';

const InputSearch = () => {
    const { state, setState } = useContext(Context);
    const { inputValue } = state;

    const handlerFetch = (e: { target: { value: string } }) => {
        setState({ ...state, inputValue: e.target.value });
    };

    useEffect(() => {
        const fetchQuery = async (value: string) => {
            const API_key = 'eee29ae1cdd2fa14b2099b6c4a367ad8';
            const cityName = value;
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_key}&lang=ru`
                );
                if (response.status > 299) {
                    throw Error(response.statusText);
                }
                if (response.ok) {
                    const data = await response.json();
                    setState({
                        ...state,
                        currentCity: {
                            id: data.city.id.toString(),
                            city: data.city.name,
                            degrees: Math.floor(data.list[0].main.temp),
                            idToSprite:
                                data.list[0].weather[0].main.toLowerCase(),
                            ariaTitle: `иконка "${data.list[0].weather[0].description}"`,
                            info: data.list[0].weather[0].description,
                            pressure: pressureConverter(
                                data.list[0].main.pressure
                            ),
                            sunset: timeConverter(data.city.sunset),
                            mainClass:
                                data.list[0].weather[0].main.toLowerCase(),
                            checked: false,
                        },
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (inputValue.length > 3) {
            fetchQuery(inputValue);
        }
    }, [inputValue]);

    return (
        <div className={'input-search'}>
            <input
                onChange={handlerFetch}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') e.preventDefault();
                }}
                value={inputValue}
                className={'input-search__input'}
                type={'text'}
                id={'input-search'}
                autoComplete={'off'}
            />
            <label className={'input-search__label'} htmlFor={'input-search'}>
                {!inputValue && 'Укажите город'}
            </label>
        </div>
    );
};

export default InputSearch;
