export function callAfter(ms: number, cb: () => void) {
    setTimeout(cb, ms);
}
