export default async function getProductById(id: number) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
