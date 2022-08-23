import { IState } from './interfaces/interfaces';

const State: IState = {
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
