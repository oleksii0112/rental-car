import axios from "axios";
import {
  Car,
  CarsServerResponse,
  CarsQueryParams,
  BookingCarParams,
  CarsFiltersResponse,
} from "@/types/car";
import { cache } from "react";

interface BookingResponse {
  message: string;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://car-rental-api.goit.study";
const headers = {
  accept: `application/json`,
};

export const fetchCars = async (
  params: CarsQueryParams,
): Promise<CarsServerResponse> => {
  const response = await axios.get<CarsServerResponse>(`${BASE_URL}/cars`, {
    params,
    headers,
  });
  return response.data;
};

export const fetchCarById = cache(async (id: string): Promise<Car> => {
  const response = await axios.get<Car>(`${BASE_URL}/cars/${id}`, {
    headers,
  });
  return response.data;
});

export const createBookingRequest = async (
  carId: string,
  body: BookingCarParams,
): Promise<BookingResponse> => {
  const response = await axios.post<BookingResponse>(
    `${BASE_URL}/cars/${carId}/booking-requests`,
    body,
  );
  return response.data;
};

export const fetchFilters = async (): Promise<CarsFiltersResponse> => {
  const response = await axios.get<CarsFiltersResponse>(
    `${BASE_URL}/cars/filters`,
    {
      headers,
    },
  );
  return response.data;
};
