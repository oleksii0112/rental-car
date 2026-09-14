import css from "./CarDetails.module.css";
import { Car } from "@/types/car";

interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  return (
    <>
      <div className={css.container}>
        <div className={css.mainInfoWrapper}>
          <div className={css.titleArticleWrapper}>
            <h2 className={css.mainTitle}>
              {car.brand} {car.model}, {car.year}
            </h2>
            <p className={css.article}>Article: {car.stockNumber}</p>
          </div>
          <div className={css.locationWrapper}>
            <svg className={css.svg} height="16" width="16" aria-hidden="true">
              <use href="/sprite.svg#location"></use>
            </svg>
            <p className={css.location}>
              {car.location.city}, {car.location.country}
            </p>
          </div>
          <p className={css.price}>${car.rentalPrice}</p>
          <p className={css.description}>{car.description}</p>
        </div>
        <div className={css.bottomBlockWrapper}>
          <div className={css.blockWrap}>
            <h3 className={css.title}>Rental Conditions:</h3>
            <ul className={css.list}>
              {car.rentalConditions.map((rentalCondition) => (
                <li className={css.descriptionWrapper} key={rentalCondition}>
                  <svg
                    className={css.svg}
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="/sprite.svg#checkmark"></use>
                  </svg>
                  <p className={css.description}>{rentalCondition}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={css.blockWrap}>
            <h3 className={css.title}>Car Specifications:</h3>
            <div className={css.descriptionWrapper}>
              <svg
                className={css.svg}
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use href="/sprite.svg#calendar"></use>
              </svg>
              <p className={css.description}>Year: {car.year}</p>
            </div>
            <div className={css.descriptionWrapper}>
              <svg
                className={css.svg}
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use href="/sprite.svg#car"></use>
              </svg>
              <p className={css.description}>Type: {car.type}</p>
            </div>
            <div className={css.descriptionWrapper}>
              <svg
                className={css.svg}
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use href="/sprite.svg#gas"></use>
              </svg>
              <p className={css.description}>
                Fuel Consumption: {car.fuelConsumption}
              </p>
            </div>
            <div className={css.descriptionWrapper}>
              <svg
                className={css.svg}
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use href="/sprite.svg#gear"></use>
              </svg>
              <p className={css.description}>Engine: {car.engine}</p>
            </div>
            <div className={css.descriptionWrapper}>
              <svg
                className={css.svg}
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use href="/sprite.svg#mileage"></use>
              </svg>
              <p className={css.description}>Mileage: {car.mileage} km</p>
            </div>
          </div>

          <div className={css.blockWrap}>
            <h3 className={css.title}>Features</h3>
            <ul className={css.list}>
              {car.features.map((feature) => (
                <li className={css.descriptionWrapper} key={feature}>
                  <svg
                    className={css.svg}
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="/sprite.svg#checkmark"></use>
                  </svg>
                  <p className={css.description}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
