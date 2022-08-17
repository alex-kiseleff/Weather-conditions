import { IState } from './interfaces/interfaces';

const State: IState = {
    inputValue: '',
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
    favourites: [],
};

export default State;
