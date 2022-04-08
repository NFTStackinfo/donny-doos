export const normalizeRange = (value, min, max) => value > max ? max
    : value < min ? min
        : value;

export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;