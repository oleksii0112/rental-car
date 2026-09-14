import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/types/car";
import css from "./CarCard.module.css";

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className={css.carCard}>
      <div className={css.imgWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes="244px"
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div className={css.cardContent}>
        <div className={css.cardTitleWrapper}>
          <h3 className={css.cardTitle}>
            {car.brand} <span className={css.model}>{car.model}</span>,{" "}
            {car.year}
          </h3>
          <p className={css.price}>${car.rentalPrice}</p>
        </div>
        <div className={css.cardInfoWrapper}>
          <p className={css.cardInfo}>
            <span>{car.location.city}</span>
            <span>{car.location.country}</span>
            <span>{car.rentalCompany}</span>
          </p>
          <p className={css.cardInfo}>
            <span>{car.type}</span>
            <span>{car.mileage.toLocaleString("uk-UA")} km</span>
          </p>
        </div>
      </div>
      <Link
        href={`/catalog/${car.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className={css.link}
      >
        Read more
      </Link>
    </div>
  );
}
