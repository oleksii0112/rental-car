"use client";

import { useEffect, useRef, useState } from "react";
import css from "./CustomSelect.module.css";

export interface CustomSelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: CustomSelectOption[];
  placeholder: string;
  className?: string;
  formatSelected?: (label: string) => string;
}

export default function CustomSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
  className,
  formatSelected,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value);
  const triggerLabel = selectedOption
    ? formatSelected
      ? formatSelected(selectedOption.label)
      : selectedOption.label
    : placeholder;

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div
      className={css.wrapper}
      ref={wrapperRef}
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsOpen(false);
      }}
    >
      <button
        type="button"
        id={id}
        className={`${css.trigger} ${className ?? ""}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{triggerLabel}</span>
        <svg className={css.icon} width="13" height="7" aria-hidden="true">
          <use href={`/sprite.svg#icon-chevron-${isOpen ? "up" : "down"}`} />
        </svg>
      </button>

      {isOpen && (
        <ul className={css.dropdown} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={`${css.option} ${option.value === value ? css.optionSelected : ""}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
