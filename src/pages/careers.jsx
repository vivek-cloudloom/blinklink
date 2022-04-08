import Head from "next/head";
import Feature from "../components/Features/Feature";
import Solution from "../components/Solutions/Solution";
import enterprise from "../data/enterprise";
import features from "../data/features";
import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import jobs from "../data/jobs";
import JobList from "../components/career/JobList";
import Paragraph from "../components/common/Paragraph";
import Title from "../components/common/Title";
export default function Features() {
  const items = [
    "Full stack Developer",
    "Solidity developer",
    "Architect",
    "Sales-Enterprise",
    "Head of compliance",
    "Machine Learning Engineer",
    "Growth Hacker",
    "Data Scientist",
  ];

  const locations = ["Miami", "Dubai", "Bangalore"];
  return (
    <div className="home-page">
      <div className="home-item">
        <div className="align-items-center container d-flex flex-column justify-content-center vh-100">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 offset-lg-1 order-2 order-lg-1">
              <span className="typography-5-medium">
                Revolutionize how the world{" "}
                <span className="typography-6-semibold torus-font text-danger">
                  Influences
                </span>
              </span>
              <Paragraph className="mt-4">
                Work alongside the most amazing teammates in a culture
                that is all about rewarding innovation.
              </Paragraph>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <Image
                src="/images/solutions/future.svg"
                alt="The power of attention, in the palm of your hand"
                width={475}
                height={499}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="container d-flex flex-column justify-content-center py-5">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="bg-body d-flex flex-column m-4 p-4">
                <h3 className="border-bottom border-warning pb-2 text-warning torus-font typography-3-semibold">
                  FILTER JOBS
                </h3>
                <Form>
                  <Form.Control
                    type="search"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    className="my-2"
                  />

                  <hr className="border-bottom border-warning" />

                  <div className="my-3">
                    {locations.map((location) => {
                      return (
                        <Form.Check
                          inline
                          key={location}
                          label={location}
                          name="group1"
                          id={`location-${location}`}
                          type="checkbox"
                          className="typography-1-normal text-dark"
                        />
                      );
                    })}
                  </div>

                  <span className="typography-3-semibold torus-font text-warning my-4">
                    JOB TYPE
                  </span>

                  <div className="my-3">
                    {items.map((item) => {
                      return (
                        <Form.Check
                          label={item}
                          key={item}
                          name="group2"
                          id={`type-${item}`}
                          type="checkbox"
                          className="typography-1-normal text-dark"
                        />
                      );
                    })}
                  </div>

                  <div className="text-center">
                    <Button className="bg-dark btn-height px-lg-4">Blinklink</Button>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="d-flex flex-column m-4 pt-4">
                <h3 className="border-bottom border-warning pb-2  text-warning torus-font typography-3-semibold">
                  Jobs
                </h3>

                <div className="d-flex flex-column">
                  {jobs.map((job) => {
                    return <JobList job={job} key={job.id} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-item">
        <div className="align-items-center container d-flex flex-column justify-content-center py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <Title>Explore the future of your Influence, today!</Title>
            </div>
            <div className="col-12 col-lg-5">
            <Button variant="danger" className="btn-height">
                <span className="text-light typography-1-semibold montserrat-font">
                  Download Now
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
