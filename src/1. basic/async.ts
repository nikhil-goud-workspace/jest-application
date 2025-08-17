export async function fetchUser() {
    return { id: 1, name: 'Ava' };
}
export async function fetchWithError() {
    throw new Error('Network fail');
}