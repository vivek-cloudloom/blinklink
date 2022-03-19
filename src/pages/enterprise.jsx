import Head from "next/head";
import { Container, Row, Card, Button, Form } from "react-bootstrap";
import Solution from "../components/Solutions/Solution";
import enterprise from "../data/enterprise";

export default function EnterPrise() {
  return (
    <>
      <div className="enterprise-page">
        <div className="enterprise-page-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <h6 className="typography-6">The Turn-key</h6>
            <h4 className="typography-7">
            The Operating System for <span className="text-info">Marketing</span>
            </h4>
            <img src="/images/enterprise/marketing.png" />
            
          </div>
        </div>

        {enterprise.map((link) => {
          return (
            <Solution
              key={link.title}
              title={link.title}
              description={link.description}
              imageUrl={link.imageUrl}
              className="enterprise-page-item"
            />
          );
        })}

        <div className="enterprise-page-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <div className="align-items-center d-flex">
              <img src="/images/enterprise/future.png" />
              <div className="p-5">
                <h4 className="typography-5">
                  Explore the future of your Influence, today!
                </h4>
                <div>
                  <button type="button" className="btn btn-info download-now">
                    <span className="typography-4 text-light">ENTERPRISE TEAM</span>
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
