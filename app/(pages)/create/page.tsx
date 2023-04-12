"use client";
import { IProduct } from "@/types";
import createProduct from "@/lib/createProduct";
import ProductsForm from "@/app/components/ProductsForm";

function Create() {
  const createNewProduct = async (e: any, data: IProduct) => {
    e.preventDefault();
    await createProduct(data);
  };

  return <ProductsForm handleSubmit={createNewProduct} />;
}

export default Create;
