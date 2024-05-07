export function clearToken (authorization: string) {
    const token = authorization.replace("Bearer ", "");
    return token;
}