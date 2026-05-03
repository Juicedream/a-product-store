import { Suspense } from "react";
import Banner from "../../ui/store/banner";
import BannerSkeleton from "../../ui/store/bannerSkeleton";
import CategoryList from "../../ui/store/categoryList";
import ProductsList from "../../ui/store/productsList";
import Pagination from "../../ui/store/pagination";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home Page",
  description: "A store for you",
};

export default function StoreFrontPage() {
  return (
    <>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner />
      </Suspense>
      <CategoryList />
      <ProductsList />
      <Pagination />
    </>
  );
}
