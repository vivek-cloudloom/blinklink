import Image from "next/image";
import ArrowLink from "../common/ArrowLink";
import Paragraph from "../common/Paragraph";
import Title from "../common/Title";

export default function Solution({
  title,
  description,
  imageUrl,
  className,
  width,
  height,
  leftWidth = "w-50",
  rightWidth = "w-50",
  type="danger"
}) {
  return (
    <div className={className}>
      <div className="container align-items-center d-flex justify-content-center flex-column h-100">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <div className={`d-flex flex-column gap1 ${leftWidth}`}>
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
            <ArrowLink label="" type={type} />
          </div>
          <div className={`${rightWidth}`}>
            <Image src={imageUrl} alt={title} width={width} height={height} />
          </div>
        </div>
      </div>
    </div>
  );
}
