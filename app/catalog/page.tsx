import Catalog from "./Catalog.client";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Car",
  description:
    "The list of all our cars with the ability to filter the best matching car for you.",
  openGraph: {
    title: `All our cars available for renting.`,
    description: `The list of all our cars with the ability to filter the best matching car for you.`,
    url: `/catalog`,
    siteName: "RentalCar",
    images: [
      {
        url: "/maserati.jpg",
        width: 1200,
        height: 630,
        alt: `White Maserati GranTurismo under sunlight`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All our cars available for renting.",
    description:
      "The list of all our cars with the ability to filter the best matching car for you.",
    images: ["/maserati.jpg"],
  },
};

export default function CatalogPage() {
  return (
    <Suspense>
      <Catalog />
    </Suspense>
  );
}
