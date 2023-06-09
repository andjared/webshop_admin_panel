"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import ProductRow from "./ProductRow";
import { IProduct } from "@/types/interfaces";
import { ProductService } from "@/services/ProductService";

export interface Props {
  products: IProduct[];
}

export default function ProductsTable({ products = [] }: Props): JSX.Element {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = async (id: number) => {
    await ProductService.deleteProduct(id);
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  };

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
        {products.map(({ id, title }) => {
          return (
            <ProductRow
              key={id}
              id={id}
              title={title}
              handleDelete={handleDelete}
            />
          );
        })}
      </tbody>
    </table>
  );
}
