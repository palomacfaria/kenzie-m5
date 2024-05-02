//função pra verificar a existência de SECRET_KEY
export const jwConfig = () => {
    const secret = process.env.SECRET_KEY;
    const expiresIn = process.env.EXPIRES_IN;

    if(!secret){
        throw new Error("Missing JWT enviroment variable 'SECRET_KEY'. ");
    }

    return {secret, expiresIn};
};