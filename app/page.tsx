"use client";
import { products } from "@/products";

function Home() {
  return (
    <main className="flex items-center justify-center w-full p-8">
      <table className="table-auto border-collapse border border-slate-400 border-spacing-2 w-4/5 py-8 text-sm">
        <thead>
          <tr className="border-collapse border border-slate-400 p-2">
            <th className="border-collapse border border-slate-400 p-2">
              Title
            </th>
            <th className="p-2" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-collapse border border-slate-400 p-2 align-middle"
            >
              <td className="border-collapse border border-slate-400  py-1 px-3">
                {product.title}
              </td>
              <td className="border-collapse border border-slate-400 p-2">
                <button className="bg-green-500 text-white py-1 px-3">
                  Edit
                </button>
              </td>
              <td className="border-collapse border border-slate-400 p-2">
                <button className="bg-red-500 text-white py-1 px-3">
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
