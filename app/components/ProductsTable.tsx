import Link from "next/link";
import { IProduct } from "@/types";
import React from "react";

export interface Props {
  products: IProduct[];
  handleDelete: (id: number) => void;
}
export default function Products({
  products,
  handleDelete,
}: Props): JSX.Element {
  return (
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
        {products &&
          products.map((product: IProduct) => {
            const { id, title } = product!;
            return (
              <tr
                key={id}
                className="border-collapse border border-slate-300 rounded-md  border-spacing-2 shadow-sm p-2 align-middle"
              >
                <td className="border-collapse border border-slate-300 rounded-md  border-spacing-2 shadow-sm  py-1 px-3 font-medium">
                  {title}
                </td>
                <td className="border-collapse border border-slate-300 rounded-md  border-spacing-2 shadow-sm p-2">
                  <Link href={`/edit/${id}`} className="text-sm z-10">
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
            );
          })}
      </tbody>
    </table>
  );
}
