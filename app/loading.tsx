import Loader from "@/components/Loader/Loader";
import css from "./loading.module.css";

export default function CatalogLoading() {
  return (
    <div className={css.wrapper}>
      <Loader />
    </div>
  );
}
