import Catalog from "./Catalog.client";
import { Suspense } from "react";

export default function CatalogPage() {
  return (
    <Suspense>
      <Catalog />
    </Suspense>
  );
}
