export default function authHeader() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    return user && user.accessToken ? {Authorization: "Security " + user.accessToken} : {};
}