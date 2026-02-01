declare const debounce: <T extends unknown[]>(func: (...args: T) => void, wait: number) => ((...args: T) => void);
export default debounce;
