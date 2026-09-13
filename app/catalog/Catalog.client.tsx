"use client";

import { useSearchParams } from "next/navigation";
import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchCars } from "@/lib/api";
import { CarsQueryParams } from "@/types/car";

import CarCard from "@/components/CarCard/CarCard"
import css from "./Catalog.module.css"
import EmptyError from "@/components/EmptyError/EmptyError";
import Loader from "@/components/Loader/Loader";
import FilterForm from "@/components/FilterForm/FilterForm";
import RefetchOverlay from "@/components/RefetchOverlay/RefetchOverlay";

const PER_PAGE = 12;

export default function Catalog() {
  const searchParams = useSearchParams();
  const filters: CarsQueryParams = {
    brand: searchParams.get("brand") || undefined,
    price: searchParams.get("price")
      ? Number(searchParams.get("price"))
      : undefined,
    minMileage: searchParams.get("minMileage")
      ? Number(searchParams.get("minMileage"))
      : undefined,
    maxMileage: searchParams.get("maxMileage")
      ? Number(searchParams.get("maxMileage"))
      : undefined,
  };

  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: [`carsList`, filters],
    initialPageParam: 1,
    placeholderData: keepPreviousData,
    queryFn: ({ pageParam }) =>
      fetchCars({ ...filters, page: pageParam, perPage: PER_PAGE }),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  });

  const cars = data?.pages.flatMap((response) => response.cars) ?? [];
  const isRefetching = isFetching;

  return (
    <section className={css.catalog}>
      <FilterForm />

      {isLoading && (
        <div className={css.stateWrapper}>
          <Loader text="We are matching the best cars for you..." />
        </div>
      )}

      {isError && (
        <div className={css.stateWrapper} role="alert">
          <p>Could not load cars: {error.message}</p>
          <button type="button" onClick={() => refetch()}>
            Try again
          </button>
        </div>
      )}

      {isSuccess && cars.length === 0 && <EmptyError />}

      {isSuccess && cars.length > 0 && (
        <>
          <div className={css.listWrapper}>
            <ul className={css.list}>
              {cars.map((car) => (
                <li key={car.id}>
                  <CarCard car={car} />
                </li>
              ))}
            </ul>
            {isRefetching && <RefetchOverlay />}
          </div>
          {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              type="button"
              className={css.loadMore}
              disabled={isFetchingNextPage}
            >
              Load more
            </button>
          )}
        </>
      )}
    </section>
  );
}

