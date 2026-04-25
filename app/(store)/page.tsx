import { Suspense } from "react";
import Banner from "../ui/store/banner";
import BannerSkeleton from "../ui/store/bannerSkeleton";
import CategoryList from "../ui/store/categoryList";
import ProductsList from "../ui/store/productsList";
import Pagination from "../ui/store/pagination";

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
