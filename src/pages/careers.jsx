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
        <div className="container align-items-center d-flex justify-content-between default-page-height">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 offset-lg-1">
              <span className="typography-variant-19">
                Revolutionize how the world{" "}
                <span className="typography-variant-24 torus-font text-danger">
                  Influences
                </span>
              </span>
              <Paragraph className="mt-4">
                Work alongside the most amazing teammates in <br />a culture
                that is all about rewarding innovation.
              </Paragraph>
            </div>
            <div className="col-12 col-lg-6">
              <Image
                src="/images/careers/influences.png"
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
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="bg-body d-flex flex-column m-4 p-4">
                <h3 className="border-bottom border-warning pb-2 text-warning torus-font typography-variant-11">
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
                          type="checkbox"
                          className="typography-variant-4 text-dark"
                        />
                      );
                    })}
                  </div>

                  <span className="typography-variant-11 torus-font text-warning my-4">
                    JOB TYPE
                  </span>

                  <div className="my-3">
                    {items.map((item) => {
                      return (
                        <Form.Check
                          label={item}
                          key={item}
                          name="group2"
                          type="checkbox"
                          className="typography-variant-4 text-dark"
                        />
                      );
                    })}
                  </div>

                  <div className="text-center">
                    <Button className="bg-dark">Blinklink</Button>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="d-flex flex-column m-4 pt-4">
                <h3 className="border-bottom border-warning pb-2  text-warning torus-font typography-variant-11">
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
        <div className="container align-items-center d-flex justify-content-center flex-column h-100 py-150">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <Title>Explore the future of your Influence, today!</Title>
            </div>
            <div className="col-12 col-lg-5">
            <Button variant="danger" className="btn-height">
                <span className="text-light typography-variant-5 montserrat-font">
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
