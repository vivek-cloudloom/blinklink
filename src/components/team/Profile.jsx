import Image from "next/image";
import { useState } from "react";
import TextLink from "../common/TextLink";
export default function Profile({ data }) {
  const [showmore, toggleShowMore] = useState(false);
  return (
    <div className="py-5 profile">
      <div className="container">
        <div className="row g-3 row">
          <div className="col-12 col-lg-3  offset-lg-1 text-center">
            <Image
              src={data.imageUrl}
              alt="BlinkLink logo"
              width={228}
              height={230}
              quality={100}
            />
          </div>
          <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
            {" "}
            <div className="align-items-center d-flex gap-4">
              <h5 className="typography-4-normal">{data.name}</h5>
              <TextLink link={data.linkedIn}>
                <Image
                  src={"/images/logo/linkedin.svg"}
                  alt="linkedin logo"
                  width={102}
                  height={26}
                  quality={100}
                />
              </TextLink>
            </div>
            <h5 className="typography-4-semibold">{data.designation}</h5>
            {/* <p
              className={`typography-1-normal ${
                !showmore ? "two-line-ellipsis" : ""
              }`}
            >
              {data.bio}
            </p>
            <button
              style={{ background: "transparent" }}
              onClick={() => {
                toggleShowMore(!showmore);
              }}
              className="border-0 text-info p-0"
            >
              {showmore ? "Show Less" : "Show More"}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
