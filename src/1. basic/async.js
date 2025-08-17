// export async function fetchUser() {
//     return { id: 1, name: 'Ava' };
// }
// export async function fetchWithError() {
//     throw new Error('Network fail');
// }
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(function () {
        var data = "User info";
        callback(data); // call the function passed in
    }, 2000);
}
function handleData(data) {
    console.log("Data received:", data);
}
fetchData(handleData);
