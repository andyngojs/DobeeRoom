const KEY = 'DR_SECRET';

export const get = () => JSON.parse(localStorage.getItem(KEY)) || [];

export const set = (token) => {
    localStorage.setItem(KEY, JSON.stringify(token));
};

export const remove = () => {
    localStorage.removeItem(KEY);
};