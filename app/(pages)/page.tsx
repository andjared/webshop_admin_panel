"use client";
import { products } from "@/products";
import Link from "next/link";

function Home() {
  return (
    <main className="flex flex-col justify-center align-center text-primary max-w-4xl mx-auto px-2 mb-10">
      <header className="flex justify-between align-center my-5">
        <h2 className="font-title font-extrabold text-lg">Products</h2>
        <Link href="/create" className="text-sm text-white font-medium">
          <button className="bg-positive font-medium py-2 px-6">
            Create New Product
          </button>
        </Link>
      </header>
      <table className="table-auto py-8 text-sm">
        <thead>
          <tr>
            <th className="border-collapse border border-slate-300 rounded-md border-spacing-2 shadow-sm font-medium py-2">
              Product Title
            </th>
            <th
              className="border-collapse border border-slate-300 rounded-md border-spacing-2 shadow-sm font-medium py-2"
              colSpan={2}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-collapse border border-slate-300 rounded-md  border-spacing-2 shadow-sm p-2 align-middle"
            >
              <td className="border-collapse border border-slate-300 rounded-md  border-spacing-2 shadow-sm  py-1 px-3 font-medium">
                {product.title}
              </td>
              <td className="border-collapse border border-slate-300 rounded-md  border-spacing-2 shadow-sm p-2">
                <Link href={`/edit/${product.id}`} className="text-sm z-10">
                  <button className="bg-positive text-white font-medium py-2 px-6 pointer-events-auto">
                    Edit
                  </button>
                </Link>
              </td>
              <td className="border-collapse border border-slate-300 rounded-md  border-spacing-2 shadow-sm p-2">
                <button className="bg-warning text-white font-medium py-2 px-6">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Home;
