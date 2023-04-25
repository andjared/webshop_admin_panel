import Link from "next/link";
import getAllProducts from "@/lib/getAllProducts";
import { IProduct } from "@/types";
import ProductsTable from "./components/ProductsTable";

async function Home() {
  const data: Promise<IProduct[]> = getAllProducts();
  const products = await data;

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
      <ProductsTable products={products} />
    </main>
  );
}

export default Home;
