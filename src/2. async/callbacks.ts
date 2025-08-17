export function fetchDataCallback(cb: (data: string) => void) {
    setTimeout(() => cb('peanut butter'), 100);
}
