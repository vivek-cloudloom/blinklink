export default function Title({ children, isDefaultFont, className }) {
  const classNames = [];
  if (isDefaultFont) {
    classNames.push("typography-variant-17");
  } else {
    classNames.push("typography-variant-22 torus-font");
  }

  if (className) {
    classNames.push(className);
  }
  return <h2 className={classNames.join(" ")}>{children}</h2>;
}
