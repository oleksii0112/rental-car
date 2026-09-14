import CarDetails from "@/components/CarDetails/CarDetails";
import { fetchCarById } from "@/lib/api";
import axios from "axios";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookForm/BookingForm";

export default async function Details({ params }: PageProps<"/catalog/[id]">) {
  const { id } = await params;
  let car;
  try {
    car = await fetchCarById(id);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      notFound();
    }
    throw error;
  }

  return (
    <>
      <CarDetails car={car} />
      <BookingForm carId={car.id}></BookingForm>
    </>
  );
}
