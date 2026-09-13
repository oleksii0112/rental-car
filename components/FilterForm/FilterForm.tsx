"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./FilterForm.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchFilters } from "@/lib/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomSelect from "./CustomSelect";

interface FilterFormValues {
  brand: string;
  price: string;
  minMileage: string;
  maxMileage: string;
}

export default function FilterForm() {
  const fieldId = useId();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data: options } = useQuery({
    queryKey: ["carFilters"],
    queryFn: fetchFilters,
  });

  const handleSubmit = (values: FilterFormValues) => {
    const params = new URLSearchParams();
    if (values.brand) {
      params.set("brand", values.brand);
    }
    if (values.price) {
      params.set("price", values.price);
    }
    if (values.minMileage) {
      params.set("minMileage", values.minMileage);
    }
    if (values.maxMileage) {
      params.set("maxMileage", values.maxMileage);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const initialValues: FilterFormValues = {
    brand: searchParams.get("brand") ?? "",
    price: searchParams.get("price") ?? "",
    minMileage: searchParams.get("minMileage") ?? "",
    maxMileage: searchParams.get("maxMileage") ?? "",
  };

  const priceOptions: number[] = [];
  if (options) {
    for (
      let price = options.price.min;
      price <= options.price.max;
      price += 10
    ) {
      priceOptions.push(price);
    }
  }

  const brandItems =
        options?.brands.map((brand) => ({ value: brand, label: brand })) ?? [];
    
  const priceItems = priceOptions.map((price) => ({
    value: String(price),
    label: String(price),
  }));
    
    const validateMileage = (values: FilterFormValues) => {
      const errors: { minMileage?: string; maxMileage?: string } = {};
      const message = "Введіть число\nвід 0 до 999.999";

      const min = values.minMileage === "" ? null : Number(values.minMileage);
      const max = values.maxMileage === "" ? null : Number(values.maxMileage);

      if (min !== null && (min < 0 || min > 999999)) {
        errors.minMileage = message;
      }
      if (max !== null && (max < 0 || max > 999999)) {
        errors.maxMileage = message;
      }
      if (min !== null && max !== null && min > max) {
        errors.minMileage = message;
        errors.maxMileage = message;
      }

      return errors;
    };
    
  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
        validate={validateMileage}
      >
        {({ values, setFieldValue, resetForm }) => (
          <Form className={css.form} noValidate>
            <fieldset className={css.fieldset}>
              <legend className={css.visuallyHidden}>Car filter</legend>
              <div className={css.field}>
                <label className={css.label} htmlFor={`${fieldId}-brand`}>
                  Car brand
                </label>
                <CustomSelect
                  id={`${fieldId}-brand`}
                  className={css.fieldOption}
                  value={values.brand}
                  onChange={(value) => setFieldValue("brand", value)}
                  options={brandItems}
                  placeholder="Choose a brand"
                />
              </div>
              <div className={css.field}>
                <label className={css.label} htmlFor={`${fieldId}-price`}>
                  Car price / 1 hour
                </label>
                <CustomSelect
                  id={`${fieldId}-price`}
                  className={`${css.fieldOption} ${css.priceOption}`}
                  value={values.price}
                  onChange={(value) => setFieldValue("price", value)}
                  options={priceItems}
                  placeholder="Choose a price"
                  formatSelected={(label) => `To $${label}`}
                />
              </div>
              <div className={css.field}>
                <label className={css.label} htmlFor={`${fieldId}-mileage`}>
                  Car mileage / km
                </label>
                <div className={css.mileageRow}>
                  <div className={css.mileageField}>
                    <Field
                      className={css.mileageMin}
                      id={`${fieldId}-mileage`}
                      type="number"
                      name="minMileage"
                      placeholder="From"
                      min={0}
                      max={999999}
                      step={10000}
                    />
                    <ErrorMessage
                      name="minMileage"
                      component="p"
                      className={css.error}
                    />
                  </div>
                  <div className={css.mileageField}>
                    <Field
                      className={css.mileageMax}
                      type="number"
                      name="maxMileage"
                      placeholder="To"
                      min={0}
                      max={999999}
                      step={10000}
                    />
                    <ErrorMessage
                      name="maxMileage"
                      component="p"
                      className={css.error}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <div className={css.buttonsWrapper}>
              <button className={css.search} type="submit">
                Search
              </button>
              <button
                className={css.clear}
                type="button"
                onClick={() => {
                  resetForm({
                    values: {
                      brand: "",
                      price: "",
                      minMileage: "",
                      maxMileage: "",
                    },
                  });
                  router.replace(pathname);
                }}
              >
                Clear filters
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
