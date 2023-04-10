export default async function getAllProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    mode: "no-cors",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
