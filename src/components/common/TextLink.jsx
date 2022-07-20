export default function TextLink({ link, children }) {
  return (
    <a href={link} className="text-info" target="_blank">
      {children}
    </a>
  );
}
