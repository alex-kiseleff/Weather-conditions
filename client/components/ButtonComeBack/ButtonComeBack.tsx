/**
 * @component ButtonComeBack - рендерит кнопку возврата на
 * главную страницу.
 */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context';
import Icons from '../Icons';
import './ButtonComeBack.scss';

const propsIconComeBack = {
    idToSprite: 'arrow-come-back',
    mainClass: 'arrow-come-back',
    parentClassForMix: 'button-come-back',
    ariaTitle: 'стрелка назад',
};

const ButtonComeBack = () => {
    const { state, setState } = useContext(Context);
    const navigate = useNavigate();

    const handlerClick = () => {
        setState({
            ...state,
            currentCity: {
                id: '',
                city: '',
                degrees: '',
                idToSprite: '',
                ariaTitle: '',
                info: '',
                pressure: '',
                sunset: '',
                mainClass: '',
                parentClassForMix: '',
                checked: false,
            },
        });
        navigate('/');
    };

    return (
        <button onClick={handlerClick} className={'button-come-back'}>
            <Icons {...propsIconComeBack} />
            <span className={'button-come-back__text'}>{'Назад'}</span>
        </button>
    );
};

export default ButtonComeBack;
