const parseJwt = (token: string) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
            '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

        return JSON.parse(jsonPayload);
    } catch (e) {
        alert("Error parsing JWT\n"+ e);
        return null;
    }
};

export const isTokenValid = () => {
    const token = localStorage.getItem('accessJwtToken');
    if (!token) return false;

    const decodedToken = parseJwt(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken && decodedToken.exp > currentTime;
};

export const getEmail = () => {
    const token = localStorage.getItem('accessJwtToken');
    // @ts-ignore
    const decodedToken = parseJwt(token);
    return decodedToken.sub;
}
