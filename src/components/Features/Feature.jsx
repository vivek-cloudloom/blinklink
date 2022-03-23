import Image from "next/image";
import ArrowLink from "../common/ArrowLink";
import Paragraph from "../common/Paragraph";
import Title from "../common/Title";
export default function Feature({ features, imageUrl, className }) {
  return (
    <div className={className}>
      <div className="container align-items-center d-flex justify-content-center flex-column h-100">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <div className="w-40">
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
          <div className="d-flex justify-content-center w-20">
            <ArrowLink label="" />
          </div>
          <div className="w-40">
            <Image src={imageUrl} alt="social" width={420} height={504} />
          </div>
        </div>
      </div>
    </div>
  );
}
