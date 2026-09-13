import Loader from "../Loader/Loader";
import css from "./RefetchOverlay.module.css";

export default function RefetchOverlay() {
  return (
    <div className={css.overlay}>
      <div className={css.card}>
        <Loader />
          <h3 className={css.title}>Loading cars...</h3>
          <p className={css.description}>
            Please wait while we fetch the best cars for you
          </p>
      </div>
    </div>
  );
}
