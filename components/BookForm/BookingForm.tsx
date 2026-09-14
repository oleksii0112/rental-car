"use client";

import css from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useId } from "react";
import { useMutation } from "@tanstack/react-query";
import { createBookingRequest } from "@/lib/api";
import toast from "react-hot-toast";
import * as Yup from "yup";

interface BookingFormProps {
  carId: string;
}

interface BookingFormValues {
  name: string;
  email: string;
  comment: string;
}
const fullNameRegex = /^[A-Za-zА-ЯҐЄІЇа-яґєії'\s-]+$/;
const Schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(6, "Minimum 6 characters")
    .required("Please enter your name.")
    .matches(fullNameRegex, "Please enter your full name"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Please enter your email."),
  comment: Yup.string().trim().required("Comment is required"),
});

export default function BookingForm({ carId }: BookingFormProps) {
  const fieldId = useId();
  const initialValues: BookingFormValues = {
    name: "",
    email: "",
    comment: "",
  };
  const mutation = useMutation({
    mutationFn: (values: BookingFormValues) =>
      createBookingRequest(carId, {
        name: values.name,
        email: values.email,
        comment: values.comment,
      }),
    onSuccess: () => {
      toast.success(
        "Booked! Thank you for your trusting. We will contact you soon.",
      );
    },
    onError: () => {
      toast.error("Something went wrong! Please try again.");
    },
  });

  const handleSubmit = (
    values: BookingFormValues,
    { resetForm }: FormikHelpers<BookingFormValues>,
  ) => {
    mutation.mutate(values, {
      onSuccess: () => {
        resetForm();
      },
    });
  };

  return (
    <div className={css.container}>
      <div className={css.titleWrapper}>
        <p className={css.title}>Book your car now</p>
        <p className={css.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema}
      >
        {({ errors, touched }) => (
          <Form className={css.form} noValidate>
            <fieldset className={css.fieldset}>
              <legend className={css.visuallyHidden}>Booking form</legend>

              <label className={css.visuallyHidden} htmlFor={`${fieldId}-name`}>
                Name
              </label>
              <div className={css.fieldWrapper}>
                {errors.name && touched.name && (
                  <span className={css.floatingLabel} aria-hidden="true">
                    Name*
                  </span>
                )}
                <Field
                  className={`${css.field} ${
                    errors.name && touched.name ? css.fieldError : ""
                  }`}
                  id={`${fieldId}-name`}
                  type="text"
                  name="name"
                  placeholder="Name*"
                />
                {errors.name && touched.name && (
                  <svg
                    className={css.errorIcon}
                    height="24"
                    width="24"
                    aria-hidden="true"
                  >
                    <use href="/sprite.svg#error"></use>
                  </svg>
                )}
                <ErrorMessage
                  name="name"
                  component="p"
                  className={css.error}
                />
              </div>

              <label
                className={css.visuallyHidden}
                htmlFor={`${fieldId}-email`}
              >
                Email
              </label>
              <div className={css.fieldWrapper}>
                {errors.email && touched.email && (
                  <span className={css.floatingLabel} aria-hidden="true">
                    Email*
                  </span>
                )}
                <Field
                  className={`${css.field} ${
                    errors.email && touched.email ? css.fieldError : ""
                  }`}
                  id={`${fieldId}-email`}
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                {errors.email && touched.email && (
                  <svg
                    className={css.errorIcon}
                    height="24"
                    width="24"
                    aria-hidden="true"
                  >
                    <use href="/sprite.svg#error"></use>
                  </svg>
                )}
                <ErrorMessage
                  name="email"
                  component="p"
                  className={css.error}
                />
              </div>

              <label
                className={css.visuallyHidden}
                htmlFor={`${fieldId}-comment`}
              >
                Comment
              </label>
              <div className={css.fieldWrapper}>
                {errors.comment && touched.comment && (
                  <span className={css.floatingLabel} aria-hidden="true">
                    Comment*
                  </span>
                )}
                <Field
                  className={`${css.textarea} ${css.field} ${
                    errors.comment && touched.comment ? css.fieldError : ""
                  }`}
                  id={`${fieldId}-comment`}
                  as="textarea"
                  name="comment"
                  placeholder="Comment*"
                />
                {errors.comment && touched.comment && (
                  <svg
                    className={css.errorIcon}
                    height="24"
                    width="24"
                    aria-hidden="true"
                  >
                    <use href="/sprite.svg#error"></use>
                  </svg>
                )}
                <ErrorMessage
                  name="comment"
                  component="p"
                  className={css.error}
                />
              </div>
            </fieldset>
            <button
              type="submit"
              className={css.button}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
