import { IProductsListResponse } from "../types";

export const getProducts = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<IProductsListResponse> => {
  // try {
  //   const response = await fetch(
  //     `http://o-complex.com:1337/products?page=${pageParam}&page_size=20`
  //   );
  //   return response.json();
  // } catch (error) {
  //   throw new Error('Error fetching products');
  // }
  const res = await fetch(
    `http://o-complex.com:1337/products?page=${pageParam}&page_size=20`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
