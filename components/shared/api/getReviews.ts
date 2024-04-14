import { IReviewsResponse } from "../types";

export const getReviews = async (): Promise<IReviewsResponse> => {
  // try {
  //   const response = await fetch("http://o-complex.com:1337/reviews");
  //   return await response.json();
  // } catch (error) {
  //   throw new Error("Error fetching reviews");
  // }

  const res = await fetch("http://o-complex.com:1337/reviews");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
