export default function Typography({ Children, variant, className }) {
  const typographyClass = variant
    ? `typography-variant-${variant}`
    : "typography-1-normal";

  return <span className={`${typographyClass} ${className}`}>{Children}</span>;
}
