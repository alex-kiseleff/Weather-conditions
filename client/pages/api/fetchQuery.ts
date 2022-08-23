import { config } from './config';

const fetchQuery = async (cityName: string) => {
    const { BASE_URL, API_KEY, LANG } = config;
    try {
        const response = await fetch(
            `${BASE_URL}?q=${cityName}&units=metric&appid=${API_KEY}&lang=${LANG}`
        );
        if (response.status > 299) {
            throw Error(response.statusText);
        }
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
};

export { fetchQuery };
