"use client";

import React, { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Product } from "../productItem";

import { getProducts } from "@/components/shared/api";
import { MyLoader } from "@/components/shared/ui";
import toast, { Toaster } from "react-hot-toast";

export const ProductsList = () => {
  const listContainer = useRef<HTMLDivElement>(null);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isSuccess,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      return (lastPageParam += 1);
    },
  });

  useEffect(() => {
    const onScroll = () => {
      if (listContainer.current) {
        const scrollTop = window.scrollY || listContainer.current.scrollTop;
        const isReachBottom =
          window.innerHeight + scrollTop >= listContainer.current?.scrollHeight;
        if (isReachBottom && !isFetchingNextPage && hasNextPage) {
          fetchNextPage();
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        ref={listContainer}
      >
        {isSuccess &&
          data.pages.map((response) => {
            return response.products.map((product, index, arr) => {
              if (index === arr.length - 1) {
                return <Product key={product.id} productData={product} />;
              }
              return <Product key={product.id} productData={product} />;
            });
          })}

        {isFetching && <MyLoader />}
        {error && toast.error(error.message)}
      </div>
    </>
  );
};
