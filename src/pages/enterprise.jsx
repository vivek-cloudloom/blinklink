import Solution from "../components/Solutions/Solution";
import enterprise from "../data/enterprise";
import Image from "next/image";
import Title from "../components/common/Title";
import { Button } from "react-bootstrap";
export default function EnterPrise() {
  const features = [
    "Deeplinking",
    "Spendtracking",
    "SKU-Level ROI",
    "Attribution",
  ];
  const subFeatures = [
    "Influencer Marketplace",
    "Content Management",
    "Community Level Ads",
  ];
  return (
    <>
      <div className="home-page blue-theme">
        <div className="home-item">
          <div className="container align-items-center d-flex justify-content-center flex-column default-page-height">
            <span className="typography-variant-28">The Turn-key</span>
            <Title isDefaultFont={true}>
              The Operating System for{" "}
              <span className="typography-variant-22 torus-font text-info">
                Marketing
              </span>
            </Title>
            <Image
              src="/images/enterprise/marketing.png"
              alt="marketing"
              width={256}
              height={287}
            />
            <ul className="d-flex gap-5 typography-variant-9 text-info flex-wrap">
              {features.map((feature, index) => {
                return (
                  <li
                    key={feature}
                    className={`ps-4${index === 0 ? " list-unstyled" : ""}`}
                  >
                    {feature}
                  </li>
                );
              })}
            </ul>

            <ul className="d-flex gap-5 typography-variant-9 flex-wrap">
              {subFeatures.map((feature, index) => {
                return (
                  <li
                    key={feature}
                    className={`ps-4${index === 0 ? " list-unstyled" : ""}`}
                  >
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {enterprise.map((link) => {
          return (
            <Solution
              key={link.title}
              title={link.title}
              description={link.description}
              imageUrl={link.imageUrl}
              width={link.width}
              height={link.width}
              leftClass={link.leftClass}
              rightClass={link.rightClass}
              type="info"
              className="home-item default-page-height"
            />
          );
        })}

        <div className="home-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <div className="row align-items-center">
              <div className="col-12 col-lg-4">
                <Image
                  src="/images/enterprise/future.png"
                  alt="future"
                  width={451}
                  height={422}
                />
              </div>
              <div className="col-12 col-lg-7 offset-lg-1">
                <Title>Explore the future of your Influence, today!</Title>
                <div className="mt-4">
                  <Button variant="info" className="btn-height">
                    <span className="text-light typography-variant-5 montserrat-font">
                      ENTERPRISE TEAM
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
