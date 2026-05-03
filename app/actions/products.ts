import { ProductTypes } from "../types";

export async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const { products } = (await res.json()) as { products: ProductTypes[] };
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id: string) {
  try {
    console.log(id);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${id}`,
      {
        cache: "no-store",
      },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    const product = (await res.json()) as ProductTypes;
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
