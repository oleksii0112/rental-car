import Loader from "../Loader/Loader";
import css from "./RefetchOverlay.module.css";

interface RefetchOverlayProps {
  fullPage?: boolean;
}

export default function RefetchOverlay({
  fullPage = false,
}: RefetchOverlayProps) {
  return (
    <>
      <div className={fullPage ? `${css.dim} ${css.dimFullPage}` : css.dim} />
      <div className={css.card}>
        <Loader />
        <p className={css.description}>
          Please wait while we fetch the best <br />
          cars for you
        </p>
      </div>
    </>
  );
}
