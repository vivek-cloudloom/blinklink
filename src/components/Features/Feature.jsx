import Image from "next/image";
import ArrowLink from "../common/ArrowLink";
import Paragraph from "../common/Paragraph";
import Title from "../common/Title";
export default function Feature({ features, imageUrl, className }) {
  return (
    <div className={className}>
      {/* <div className="container align-items-center d-flex justify-content-center flex-column h-100"> */}
        <div className="align-items-center container d-flex vh-100 scroll-snap-align-start">
          <div className="row align-items-center ">
            <div className="col-12 col-lg-5 offset-lg-1">
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
            <div className="align-items-center col-12 col-lg-1 d-flex justify-content-center"><ArrowLink label="" /></div>
            <div className="col-12 col-lg-4"><Image src={imageUrl} alt="social" width={420} height={504} quality={100} /></div>
          </div>
         
        </div>
      {/* </div> */}
    </div>
  );
}
