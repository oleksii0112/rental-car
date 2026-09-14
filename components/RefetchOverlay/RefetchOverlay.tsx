import Loader from "../Loader/Loader";
import css from "./RefetchOverlay.module.css";

export default function RefetchOverlay() {
  return (
    <>
      <div className={css.dim} />
      <div className={css.card}>
        <Loader />
        <p className={css.description}>
          Please wait while we fetch the best cars for you
        </p>
      </div>
    </>
  );
}
