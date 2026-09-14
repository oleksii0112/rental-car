import CarDetails from "@/components/CarDetails/CarDetails";
import { fetchCarById } from "@/lib/api";
import axios from "axios";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookForm/BookingForm";
import css from "./CarPage.module.css";
import Image from "next/image";
import { Metadata } from "next";

async function getCarOrNotFound(id: string) {
  try {
    return await fetchCarById(id);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      notFound();
    }
    throw error;
  }
}

export async function generateMetadata({
  params,
}: PageProps<"/catalog/[id]">): Promise<Metadata> {
  const { id } = await params;
  const car = await getCarOrNotFound(id);
  return {
    title: `Car: ${car.brand} ${car.model}`,
    description: car.description.slice(0, 150),
    openGraph: {
      title: `Car: ${car.brand} ${car.model}`,
      description: car.description.slice(0, 150),
      url: `https://rental-car-alpha-red.vercel.app/catalog/${id}`,
      siteName: "RentalCar",
      images: [
        {
          url: `${car.img}`,
          width: 1200,
          height: 630,
          alt: `${car.brand} ${car.model}`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${car.brand} ${car.model}`,
      description: car.description.slice(0, 150),
      images: [car.img],
    },
  };
}

export default async function Details({ params }: PageProps<"/catalog/[id]">) {
  const { id } = await params;
  const car = await getCarOrNotFound(id);

  return (
    <section className={css.container}>
      <div className={css.leftColumn}>
        <div className={css.imageWrapper}>
          <Image
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            fill
            priority
            sizes="(max-width: 1200px) calc(100vw - 560px), 640px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <BookingForm carId={car.id} />
      </div>
      <CarDetails car={car} />
    </section>
  );
}
