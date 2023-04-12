import ProductsForm from "@/app/components/ProductsForm";
import getProductById from "@/lib/getProductById";

export interface Props {
  params: { id: string };
}

async function Edit({ params: { id } }: Props) {
  const data = getProductById(Number(id));
  const product = await data;

  return <ProductsForm product={product} />;
}

export default Edit;
