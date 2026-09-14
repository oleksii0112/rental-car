import css from "./Loader.module.css";

interface LoaderProps {
  text?: string;
}

export default function Loader({ text = "Loading..." }: LoaderProps) {
  return (
    <div className={css.root}>
      <svg
        className={css.loader}
        viewBox="0 0 140 100"
        role="status"
        aria-label="Loading"
      >
        <g className={css.roadLines}>
          <line x1="4" y1="40" x2="34" y2="40" />
          <line x1="0" y1="52" x2="30" y2="52" />
          <line x1="4" y1="64" x2="34" y2="64" />
        </g>

        <line className={css.groundSolid} x1="44" y1="91" x2="116" y2="91" />
        <line className={css.groundDashed} x1="0" y1="96" x2="140" y2="96" />

        <g className={css.wheel}>
          <circle className={css.tire} cx="80" cy="55" r="36" />
          <circle className={css.rim} cx="80" cy="55" r="32.4" />
          <circle className={css.hubRing} cx="80" cy="55" r="9" />
          <circle className={css.hub} cx="80" cy="55" r="6" />
          <path className={css.spoke} d="M 90.8,55 Q 103.2,61.2 112.4,55" />
          <path className={css.spoke} d="M 83.3,65.3 Q 81.2,79 90,85.8" />
          <path className={css.spoke} d="M 71.3,61.4 Q 57.6,63.6 53.8,74.1" />
          <path className={css.spoke} d="M 71.3,48.6 Q 64.9,36.4 53.8,35.9" />
          <path className={css.spoke} d="M 83.3,44.7 Q 93.1,34.9 90,24.2" />
        </g>
      </svg>
      {text && <p className={css.caption}>{text}</p>}
    </div>
  );
}
