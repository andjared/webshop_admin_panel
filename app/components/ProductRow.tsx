import React from "react";
import Link from "next/link";

export interface Props {
  id: number;
  title: string;
  handleDelete: (id: number) => void;
}

export default function ProductRow({ id, title, handleDelete }: Props) {
  const deleteProduct = () => {
    handleDelete(id);
  };

  return (
    <tr key={id} className="table-data p-2 align-middle">
      <td className="table-data py-1 px-3 font-medium">{title}</td>
      <td className="table-data p-2">
        <Link href={`/edit/${id}`} className="text-sm z-10">
          <span className="bg-positive text-white font-medium py-2 px-6 pointer-events-auto">
            Edit
          </span>
        </Link>
      </td>
      <td className="table-data p-2">
        <button
          className="bg-warning text-white font-medium py-2 px-6"
          onClick={deleteProduct}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
