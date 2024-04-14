import React from "react";

import { getSanitizedHtml } from "@/components/shared/lib";

interface ReviewProps {
  content: string;
}

export const ReviewItem = ({ content }: ReviewProps) => {
  const sanitizedHTML = getSanitizedHtml(content);

  return (
    <div
      className="py-5 px-7 bg-items-bg rounded-2xl 
      [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mb-4
      [&>p]:p-4 [&>p]:bg-neutral-200
      [&>p:nth-of-type(1)]:rounded-t-2xl [&>p:last-child]:rounded-b-2xl"
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    ></div>
  );
};
