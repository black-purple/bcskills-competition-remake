export const debounce = (func, delay=1000) => {
    let debounceTimer;
    return (...args) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {func(...args)}, delay);
    };
};