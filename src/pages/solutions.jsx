import Head from "next/head";
import { Container, Row, Card, Button, Form } from "react-bootstrap";
import Solution from "../components/Solutions/Solution";
import solutions from "../data/solutions";

export default function Solutions() {
  return (
    <>
      <div className="solutions-page">
        <div className="solutions-page-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <h6 className="typography-6">We Believe</h6>
            <h4 className="typography-7">
              You are the <span className="text-danger">Platform</span>
            </h4>
            <img src="/images/solutions/platform.png" />
            <h5 className="typography-11">These are your Traction Channels</h5>
          </div>
        </div>

        {solutions.map((link) => {
          return (
            <Solution
              key={link.title}
              title={link.title}
              description={link.description}
              imageUrl={link.imageUrl}
              className="solutions-page-item"
            />
          );
        })}

        <div className="solutions-page-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <div className="align-items-center d-flex">
              <img src="/images/solutions/future.png" />
              <div className="p-5">
                <h4 className="typography-5">
                  Explore the future of your Influence, today!
                </h4>
                <div>
                  <button type="button" className="btn btn-danger download-now">
                    <span className="typography-3">Download Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
