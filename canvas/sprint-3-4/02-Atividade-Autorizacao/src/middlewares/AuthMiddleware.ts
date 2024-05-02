import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/appError';
import { verify, decode } from 'jsonwebtoken';
import { jwConfig } from '../config/auth.config';
import { prisma } from '../database/prisma';
import { status } from '../utils/HttpStatusCode';

class AuthMiddleware {
    public isAuthenticated = (req: Request, res: Response, next: NextFunction): void =>{
        const {authorization} = req.headers;
        
        if(!authorization){
            throw new AppError("missing bearer token", 401);
            // return next();
        };

        // esse onderline antes de prefixo indica que é uma variavél que não esta sendo utilizada
        //o método split divide uma string apartir de um caractere da string determinado, no caso aqui determinamos o espaço em branco, 
        //para separar o prefixo Bearer do token e usar somente o token
        const [_prefix, token] = authorization.split(" ");

        const {secret} = jwConfig();
        //o método verify irá verificar se o token bate com algum token válido
        const decoded = verify(token, secret);

        console.log(decoded);

        res.locals = {
            ...res.locals, decoded,
        };

        return next();
    };

    public isRecourceOwner = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{


        const {decoded} = res.locals;
        const {userId} = req.params;

        if(decoded.sub !== userId){
            throw new AppError("You dont have permission to perform this action", status.HTTP_403_FORBIDEN)
        }

        const user = await prisma.user.findFirst({where:{id: Number(userId)}});

        res.locals = {
            ...res.locals, user
        };

        return next();
    };
};

export const auth = new AuthMiddleware();