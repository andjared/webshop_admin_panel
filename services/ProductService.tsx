import { IProduct } from "@/types/types";

export const ProductService = {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getProductById,
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function createProduct(data: Omit<IProduct, "id">) {
  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

async function deleteProduct(id: number) {
  await fetch(`${baseUrl}${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

async function editProduct(data: IProduct, id: number) {
  await fetch(`${baseUrl}${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

async function getAllProducts() {
  const res = await fetch(baseUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

async function getProductById(id: number) {
  const res = await fetch(`${baseUrl}${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
