export const get = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const set = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const remove = (key) => {
    localStorage.removeItem(key);
};