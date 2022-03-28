import Image from "next/image";
import Title from "../components/common/Title";
import Solution from "../components/Solutions/Solution";
import solutions from "../data/solutions";
import Traction from "../components/Solutions/Traction";
import { Button } from "react-bootstrap";
export default function Solutions() {
  return (
    <>
      <div className="home-page">
        <div className="home-item">
          <div className="align-items-center container d-flex flex-column justify-content-center vh-100">
            <h6 className="typography-variant-28">We Believe</h6>
            <Title isDefaultFont={true}>
              You are the{" "}
              <span className="typography-variant-22 torus-font text-danger">
                Platform
              </span>
            </Title>

            <Image
              src="/images/solutions/platform.svg"
              alt="Platform"
              width={257}
              height={244}
              quality={100}
            />
            <Traction />
            <h5 className="typography-variant-14">
              These are your{" "}
              <span className="typography-variant-16 torus-font text-danger">
                Traction Channels
              </span>
            </h5>
          </div>
        </div>

        {solutions.map((link , index) => {
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
              className="home-item"
              total={solutions.length}
              current={index}
            />
          );
        })}

        <div className="home-item">
          <div className="align-items-center container d-flex py-5">
            <div className="row align-items-center">
              <div className="col-12 col-lg-4">
                {" "}
                <Image
                  src="/images/solutions/future.svg"
                  alt="future"
                  width={433}
                  height={499}
                  quality={100}
                />
              </div>
              <div className="col-12 col-lg-7 offset-lg-1">
                <Title>Explore the future of your Influence, today!</Title>
                <div className="mt-4">
                  <Button variant="danger" className="btn-height">
                    <span className="text-light typography-variant-9">
                      Download Now
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
