import Image from "next/image";

export default function Solution({
  title,
  description,
  imageUrl,
  className,
  width,
  height,
  leftWidth = "w-50",
  rightWidth = "w-50",
}) {
  return (
    <div className={className}>
      <div className="container align-items-center d-flex justify-content-center flex-column h-100">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <div className={`d-flex flex-column gap1 ${leftWidth}`}>
            <h5 className="typography-5">{title}</h5>
            <p className="typography-6">{description}</p>
          </div>
          <div className={`${rightWidth}`}>
            <Image src={imageUrl} alt={title} width={width} height={height} />
          </div>
        </div>
      </div>
    </div>
  );
}
