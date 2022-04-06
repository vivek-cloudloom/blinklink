export default function Title({ children, isDefaultFont, className }) {
  const classNames = [];
  if (isDefaultFont) {
    classNames.push("typography-5-medium");
  } else {
    classNames.push("typography-5-semibold torus-font");
  }

  if (className) {
    classNames.push(className);
  }
  return <h2 className={classNames.join(" ")}>{children}</h2>;
}
