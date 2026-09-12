import axios from "axios";
import { Car, CarsServerResponse, CarsQueryParams, BookingCarParams } from "@/types/car"

interface BookingResponse {
    message: string
}

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://car-rental-api.goit.study";
const headers = {
    accept: `application/json`
}

export const fetchCars = async (params: CarsQueryParams): Promise<CarsServerResponse> => {
  const response = await axios.get<CarsServerResponse>(`${BASE_URL}/cars`, {
    params,
    headers,
  });
  return response.data;
};

export const fetchCarById = async (
  id: string,
): Promise<Car> => {
  const response = await axios.get<Car>(`${BASE_URL}/cars/${id}`, {
    headers,
  });
  return response.data;
};

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