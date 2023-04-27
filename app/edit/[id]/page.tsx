import ProductsForm from "@/app/components/ProductsForm";
import { ProductService } from "@/services/ProductService";

export interface Props {
  params: { id: string };
}

async function Edit({ params: { id } }: Props) {
  const data = ProductService.getProductById(Number(id));
  const product = await data;

  return <ProductsForm product={product} formType="edit" />;
}

export default Edit;
