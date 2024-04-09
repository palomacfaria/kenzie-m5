/*
model Product{
  id Int @id @default(autoincrement())
  name String 
  description String?
  price Float
  storageInfo StorageInfo?
  storeId Int 
  store Store @relation(fields: [storeId], references: [id])
  categories Category[]
}
*/

export interface IProduct{
    id: number;
    name: string;
    description?: string;
    price: number;
    storeId: number;
}

export type TCreateProductBody = Omit<IProduct, "id">;