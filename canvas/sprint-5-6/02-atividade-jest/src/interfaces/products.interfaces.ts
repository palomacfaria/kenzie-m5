export interface IProduct{
    id: number;
    name: string;
    description: string;
    price: number;
}

export type TCreateProductBody = Omit<IProduct, 'id'>;