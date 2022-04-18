import Image from "next/image";
import ArrowLink from "../common/ArrowLink";
import Paragraph from "../common/Paragraph";
import Title from "../common/Title";
export default function Feature({
  features,
  imageUrl,
  className,
  total,
  current,
  width,
  height,
  title
}) {
  return (
    <div className={className} id={title.replace(/[^a-z0-9]/gi, "")}>
      {/* <Slider total={total} current={current} type={'danger'} /> */}
      {/* <div className="container align-items-center d-flex justify-content-center flex-column h-100"> */}
      <div className="align-items-center container d-flex vh-100 scroll-snap-align-start">
        <div className="row align-items-center ">
          <div className="col-12 col-lg-5 offset-lg-1 order-2 order-lg-1">
            {features &&
              features.map((feature) => {
                return (
                  <div className="d-flex flex-column" key={feature.title}>
                    <Title>{feature.title}</Title>
                    <Paragraph>{feature.description}</Paragraph>
                  </div>
                );
              })}
          </div>
          <div className="align-items-center col-12 col-lg-1 d-lg-flex d-none justify-content-center order-3 order-lg-2">
            <ArrowLink label="" />
          </div>
          <div className="col-12 col-lg-4 order-1 order-lg-3">
            <Image
              src={imageUrl}
              alt="social"
              width={width}
              height={height}
              quality={100}
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
