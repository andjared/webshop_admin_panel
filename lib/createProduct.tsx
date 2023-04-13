import { IProduct } from "@/types";

export default async function createProduct(data: IProduct) {
  await fetch("http://localhost:3000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
