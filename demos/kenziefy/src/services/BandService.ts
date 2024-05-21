import { Band } from "../interfaces";
import {prisma} from "./database";

export class BandService {
    public list = async(): Promise<Array<Band>> => {
        return await prisma.band.findMany();
    }
    public create = (payload) => {

    }
}