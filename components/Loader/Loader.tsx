import css from "./Loader.module.css";

export default function Loader() {
  return (
    <svg
      className={css.loader}
      viewBox="0 0 200 100"
      role="status"
      aria-label="Loading"
    >
      <line className={css.ground} x1="4" y1="97" x2="26" y2="97" />
      <line className={css.ground} x1="174" y1="97" x2="196" y2="97" />

      <g>
        <line className={css.speedline} x1="-6" y1="70" x2="4" y2="70" />
        <line className={css.speedline} x1="-10" y1="80" x2="2" y2="80" />
        <line className={css.speedline} x1="-6" y1="60" x2="2" y2="60" />
      </g>

      <g className={css.car}>
        <path
          className={css.carBody}
          d="M18,78 C11,78 8,74 8,66 L8,64 C8,59 12,56 18,56 L58,56
             C62,40 72,24 84,20 L118,20 C130,24 138,38 142,56
             L182,56 C188,56 192,60 192,66 L192,70 C192,75 188,78 182,78 Z"
        />
        <path
          className={css.carWindow}
          d="M66,54 C69,42 76,30 86,26 L116,26 C126,30 132,42 134,54 Z"
        />
        <line className={css.pillar} x1="100" y1="26" x2="100" y2="54" />

        <circle className={css.wheel} cx="50" cy="78" r="17" />
        <circle className={css.hub} cx="50" cy="78" r="4.5" />
        <circle className={css.wheel} cx="150" cy="78" r="17" />
        <circle className={css.hub} cx="150" cy="78" r="4.5" />
      </g>
    </svg>
  );
}
