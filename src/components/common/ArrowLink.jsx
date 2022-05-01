import Link from "next/link";
export default function ArrowLink({ restProps, className, label, type, link , onClick }) {
  const classNames = [
    "arrow-link d-flex gap-4 text-decoration-none typography-3-medium",
  ];
  if (type === "info") {
    classNames.push("text-info");
  } else if (type === "dark") {
    classNames.push("text-dark");
  } else {
    classNames.push("text-danger");
  }
  if (className) {
    classNames.push(className);
  }
  return link ? (
    <Link href={link}>
      <a className={classNames.join(" ")} {...restProps}>
        {label}
        <svg width="36" height="30" viewBox="0 0 36 30">
          <path d="M35.4142 16.4142C36.1953 15.6332 36.1953 14.3668 35.4142 13.5858L22.6863 0.857864C21.9052 0.0768156 20.6389 0.0768156 19.8579 0.857864C19.0768 1.63891 19.0768 2.90524 19.8579 3.68629L31.1716 15L19.8579 26.3137C19.0768 27.0948 19.0768 28.3611 19.8579 29.1421C20.6389 29.9232 21.9052 29.9232 22.6863 29.1421L35.4142 16.4142ZM0 17H34V13H0V17Z" />
        </svg>
      </a>
    </Link>
  ) : (
    <a className={classNames.join(" ")} {...restProps} onClick={onClick}>
      {label}
      <svg width="36" height="30" viewBox="0 0 36 30">
        <path d="M35.4142 16.4142C36.1953 15.6332 36.1953 14.3668 35.4142 13.5858L22.6863 0.857864C21.9052 0.0768156 20.6389 0.0768156 19.8579 0.857864C19.0768 1.63891 19.0768 2.90524 19.8579 3.68629L31.1716 15L19.8579 26.3137C19.0768 27.0948 19.0768 28.3611 19.8579 29.1421C20.6389 29.9232 21.9052 29.9232 22.6863 29.1421L35.4142 16.4142ZM0 17H34V13H0V17Z" />
      </svg>
    </a>
  );
}
