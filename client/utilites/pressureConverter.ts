/**
 * @function pressureConverter - преобразует приходящую с сервера строку давления
 * из hPa в мм.рт.ст..
 * @param {string} str - строка с сервера.
 * @returns {string}
 */
const pressureConverter = (str: string) => {
    const pressure = Number(str) * 0.75006157584566;
    return Math.floor(pressure);
};

export { pressureConverter };
