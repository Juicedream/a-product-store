import { ApiError, NetworkError } from "../lib/error";
import { Toast } from "../lib/toast";
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
    if (error instanceof NetworkError) {
      Toast.error(
        "No internet connection or server is down. Please try again.",
      );
    } else if (error instanceof ApiError) {
      if (error.status === 503) {
        Toast.error(
          "Server is temporarily unavailable. Please try again later.",
        );
      } else {
        Toast.error(error.message);
      }
    } else {
      Toast.error("Something went wrong. Please try again.");
    }
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
    if (error instanceof NetworkError) {
      Toast.error(
        "No internet connection or server is down. Please try again.",
      );
    } else if (error instanceof ApiError) {
      if (error.status === 503) {
        Toast.error(
          "Server is temporarily unavailable. Please try again later.",
        );
      } else {
        Toast.error(error.message);
      }
    } else {
      Toast.error("Something went wrong. Please try again.");
    }
    return null;
  }
}
