/**
 * @function timeConverter - преобразует приходящую с сервера строку времени
 * в удобочитаемый вид формата [hh.mm].
 * @param {string} str - строка чисел с сервера.
 * @returns {string}
 */
const timeConverter = (str: string) => {
    const num = Number(str) * 1000;
    const time = new Date(num).toLocaleTimeString();
    return time.substring(0, 5);
};

export { timeConverter };
