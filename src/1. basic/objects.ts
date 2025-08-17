export class User {
    constructor(public id: number, public name: string) { }
}

export function makeUser() {
    return {
        id: 1,
        name: 'Ava',
        meta: {
            roles: ['admin', 'editor'],
            flags: {
                active: true
            }
        }
    };
}

export function callAfter(ms: number, cb: () => void) {
    setTimeout(cb, ms);
}
