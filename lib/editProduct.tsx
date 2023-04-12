import { IProduct } from "@/types";

export default async function editProduct(data: IProduct, id: number) {
  await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
