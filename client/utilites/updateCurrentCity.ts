import { pressureConverter } from './pressureConverter';
import { timeConverter } from './timeConverter';

interface IProps {
    city: {
        id: string;
        name: string;
        sunset: string;
    };
    list: [
        {
            main: {
                temp: number;
                pressure: string;
            };
            weather: [
                {
                    main: string;
                    description: string;
                }
            ];
        }
    ];
}

const updateCurrentCity = (props: IProps) => {
    if (!props) {
        return;
    }
    const data = { ...props };
    return {
        id: data?.city?.id.toString(),
        city: data?.city?.name,
        degrees: Math.floor(data?.list[0].main.temp),
        idToSprite: data?.list[0].weather[0].main.toLowerCase(),
        ariaTitle: `иконка "${data?.list[0].weather[0].description}"`,
        info: data?.list[0].weather[0].description,
        pressure: pressureConverter(data?.list[0].main.pressure),
        sunset: timeConverter(data?.city?.sunset),
        mainClass: data?.list[0].weather[0].main.toLowerCase(),
        checked: false,
    };
};

export { updateCurrentCity };
