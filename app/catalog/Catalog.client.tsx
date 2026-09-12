"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCars } from "@/lib/api";
import CarCard from "@/components/CarCard/CarCard"
import css from "./Catalog.module.css"
import EmptyError from "@/components/EmptyError/EmptyError";
import Loader from "@/components/Loader/Loader";

const PER_PAGE = 12;

export default function Catalog() {
  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: [`carsList`],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      fetchCars({ page: pageParam, perPage: PER_PAGE }),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  });

  const cars = data?.pages.flatMap((response) => response.cars) ?? [];

  if (isLoading) {
    return (
      <div className={css.stateWrapper}>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={css.stateWrapper} role="alert">
        <p>Could not load cars: {error.message}</p>
        <button type="button" onClick={() => refetch()}>
          Try again
        </button>
      </div>
    );
  }

  if (cars.length === 0) {
    return <EmptyError />;
  }

  if (isSuccess) {
    return (
      <section className={css.catalog}>
        <div className={css.listWrapper}>
          <ul className={css.list}>
            {cars.map((car) => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </ul>
        </div>
        {hasNextPage && (
          <button onClick={() => fetchNextPage()}
            type="button"
            className={css.loadMore}
            disabled={isFetchingNextPage}
          >
            Load more
          </button>
        )}
      </section>
    );
  }
}
