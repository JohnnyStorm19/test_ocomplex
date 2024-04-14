import { ReviewList, ProductsList, Cart } from "@/components/entities";

export default async function Home() {
  return (
    <div className="py-14 px-5 flex flex-col gap-8">
      <Cart />
      <ReviewList />
      <ProductsList />
    </div>
  );
}
