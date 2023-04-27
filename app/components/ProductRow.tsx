import React from "react";
import Link from "next/link";
import { IProduct } from "@/types/types";

interface Props {
  product: IProduct;
  handleDelete: (id: number) => void;
}

export default function ProductRow({
  product: { id, title },
  handleDelete,
}: Props) {
  return (
    <tr key={id} className="table-data p-2 align-middle">
      <td className="table-data py-1 px-3 font-medium">{title}</td>
      <td className="table-data p-2">
        <Link href={`/edit/${id}`} className="text-sm z-10">
          <button className="bg-positive text-white font-medium py-2 px-6 pointer-events-auto">
            Edit
          </button>
        </Link>
      </td>
      <td className="table-data p-2">
        <button
          className="bg-warning text-white font-medium py-2 px-6"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
