import React from "react";

import { ReviewItem } from "../reviewItem";
import { getReviews } from "@/components/shared/api";


export const ReviewList = async() => {
  const reviews = await getReviews();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {reviews.map(review => <ReviewItem key={review.id} content={review.text} />)}
    </div>
  );
};
