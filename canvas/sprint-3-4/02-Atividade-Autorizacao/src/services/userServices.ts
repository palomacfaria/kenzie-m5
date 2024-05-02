import { injectable } from "tsyringe";
import { prisma } from "../database/prisma"
import { TCreateUser, TLoginUser, TReturnLoginSchema, TUserReturn } from "../interfaces/userInterfaces"
import { ReturnLoginSchema, UserReturnSchema} from "../schemas/user.schemas";
import { AppError } from "../errors/appError";
import {compare, hash} from "bcryptjs"; 
import { sign } from 'jsonwebtoken';
import { jwConfig } from "../config/auth.config";


@injectable()
export class userServices{
    public getUsers = async () : Promise<Array<TUserReturn>>=>{
        const users = await prisma.user.findMany();
        const listUsers = UserReturnSchema.array().parse(users);
        return listUsers;
    }

    public register = async (body: TCreateUser) : Promise<TUserReturn> =>{
        body.password = await hash(body.password, 10);
        const user = await prisma.user.create({data: body});
        const newUser = UserReturnSchema.parse(user);
        return newUser;
    }

    public login = async (body: TLoginUser): Promise<TReturnLoginSchema> => {
        //verificar email
        const foundUser = await prisma.user.findFirst({where:{email: body.email}});

        if(!foundUser){
            throw new AppError("Invalid credentials [email]", 401)
        }

        //verificar senha com método compare
        const passwordMatch = await compare(body.password, foundUser.password)
        if(!passwordMatch){
            throw new AppError("Invalid credentials [password]", 401)
        }

        // criar token apartir das variaveis de ambiente do dotenv
        //const secret = process.env.SECRET_KEY!; // token - aleatório
        //const expiresIn = process.env.EXPIRES_IN!; //tempo de expiração do token

        //para verificar de secret e expiresIn existe foi criado uma função que substitui as variaveis acima
        //a função esta no arquivo auth.config.ts
        const {secret, expiresIn} = jwConfig(); //chamada da função

        //método sing cria a token a partir da informação que desejamos salvar do usuário, no caso aqui o id
        //não usar informações sentiveis para criar token
        const token = sign({id: foundUser.id}, secret, {
            expiresIn: expiresIn,
            subject: foundUser.id.toString() //esse método de json toString converte o id number em string 
        });
 
        const user = {...foundUser, token};
        const newUser = ReturnLoginSchema.parse(user);

        return newUser;
    } 

    public delete = async(userId: number) : Promise<void> =>{
        const user = await prisma.user.delete({where:{id: userId}});
    }
}