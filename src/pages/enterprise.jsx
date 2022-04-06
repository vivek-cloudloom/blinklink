import Solution from "../components/Solutions/Solution";
import enterprise from "../data/enterprise";
import Image from "next/image";
import Title from "../components/common/Title";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react'
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

  const [screenSize, setDimention] = useState(0);
  useEffect(()=>{
    setDimention(window.screen.width)
  } , [])

  return (
    <>
      <div className="home-page blue-theme">
        <div className="home-item">
          <div className="align-items-center container d-flex flex-column justify-content-center vh-100 text-center">
            <span className="typography-3-medium">The Turn-key</span>
            <Title isDefaultFont={true}>
              The Operating System for{" "}
              <span className="typography-5-semibold torus-font text-info">
                Marketing
              </span>
            </Title>
            <Image
              src="/images/enterprise/marketing.svg"
              alt="marketing"
              width={256}
              quality={100}
              height={287}
            />

            <ul className="d-flex flex-column flex-lg-row flex-wrap gap-lg-5 justify-content-lg-center text-info typography-3-normal">
              {features.map((feature, index) => {
                return (
                  <li
                    key={feature}
                    className={`ps-4${index === 0 && screenSize >= 992 ? " list-unstyled" : ""}`}
                  >
                    {feature}
                  </li>
                );
              })}
            </ul>

            <ul className="d-flex flex-column flex-lg-row flex-wrap gap-lg-5 justify-content-lg-center typography-3-normal">
              {subFeatures.map((feature, index) => {
                return (
                  <li
                    key={feature}
                    className={`ps-4${index === 0  && screenSize >= 992 ? " list-unstyled" : ""}`}
                  >
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {enterprise.map((link,index) => {
          return (
            <Solution
              key={link.title}
              title={link.title}
              description={link.description}
              imageUrl={link.imageUrl}
              width={link.width}
              height={link.height}
              leftClass={link.leftClass}
              rightClass={link.rightClass}
              type="info"
              className="home-item"
              total={enterprise}
              current={index}
            />
          );
        })}

        <div className="home-item">
          <div className="align-items-center container d-flex flex-column justify-content-center py-5">
            <div className="row align-items-center">
              <div className="col-12 col-lg-4">
                <Image
                  src="/images/enterprise/future.svg"
                  alt="future"
                  width={451}
                  height={422}
                  quality={100}
                />
              </div>
              <div className="col-12 col-lg-7 offset-lg-1">
                <Title>Explore the future of your Influence, today!</Title>
                <div className="mt-4">
                  <Button variant="info" className="btn-height">
                    <span className="text-light typography-1-semibold montserrat-font">
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
