export function fetchDataPromise(): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve('peanut butter'), 50));
}

export function fetchErrorPromise(): Promise<string> {
    return new Promise((_, reject) => setTimeout(() => reject(new Error('fail')), 50));
}
