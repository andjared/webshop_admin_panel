import { IProduct } from "./interfaces"

export type CreateProductType = Omit<IProduct, "id">