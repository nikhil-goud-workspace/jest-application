export const audit = {
    log: (msg: string) => `[LOG] ${msg}`,
};
export function work(x: number) {
    const msg = x > 0 ? 'ok' : 'bad';
    return audit.log(msg);
}
