import Image from "next/image";
import ArrowLink from "../common/ArrowLink";
import Paragraph from "../common/Paragraph";
import Title from "../common/Title";
import Slider from "../common/slider";
export default function Solution({
  title,
  description,
  imageUrl,
  className,
  width,
  height,
  leftClass = "col-lg-6",
  rightClass = "col-lg-5",
  type = "danger",
  total,
  current,
}) {
  return (
    <div className={className} id={title.replace(/[^a-z0-9]/gi, "")}>
      <Slider total={total} current={current} type={type} />

      <div className="align-items-center container d-flex vh-100 scroll-snap-align-start">
        <div className="row align-items-center">
          <div className={`col-12 ${leftClass} offset-lg-1 order-2 order-lg-1`}>
            <div className={`d-flex flex-column gap-3`}>
              <Title>{title}</Title>
              <Paragraph>{description}</Paragraph>
              <ArrowLink label="" type={type} />
            </div>
          </div>
          <div className={`col-12 ${rightClass} order-1 order-lg-2`}>
            <Image
              src={imageUrl}
              alt={title}
              width={width}
              height={height}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
