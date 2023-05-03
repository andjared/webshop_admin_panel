import ProductsForm from "@/app/components/ProductsForm";
import { ProductService } from "@/services/ProductService";

export interface Props {
  params: { id: string };
}

async function Edit({ params: { id } }: Props) {
  const product = await ProductService.getProductById(Number(id));

  return <ProductsForm product={product} formType="edit" />;
}

export default Edit;
