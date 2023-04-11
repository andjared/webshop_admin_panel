export default async function deleteProduct(id: number) {
  await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
