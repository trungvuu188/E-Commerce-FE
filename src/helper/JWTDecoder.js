export const JWTDecoder = (token) => {
    if(!token || isTokenExpired(token)) return;

    const arrToken = token.split('.');
    const parseItem = JSON.parse(atob(arrToken[1]));
    return parseItem;
}

export function isTokenExpired(token) {
    const arrayToken = token.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));
    return Math.floor(new Date().getTime() / 1000) >= tokenPayload?.sub;
}