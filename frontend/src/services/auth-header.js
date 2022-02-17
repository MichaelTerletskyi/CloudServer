export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.accessToken ? {Authorization: "Security " + user.accessToken} : {};
}