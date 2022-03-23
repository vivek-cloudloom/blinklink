export default function Typography({ Children, variant, className }) {
  const typographyClass = variant
    ? `typography-variant-${variant}`
    : "typography-variant-1";

  return <span className={`${typographyClass} ${className}`}>{Children}</span>;
}
