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
          <div className="d-flex flex-column gap1">
            <span className="typography-variant-19">
              Revolutionize how the <br /> world{" "}
              <span className="typography-variant-24 torus-font text-danger">
                Influences
              </span>
            </span>
            <Paragraph>
              Work alongside the most amazing teammates in <br />a culture that
              is all about rewarding innovation.
            </Paragraph>
          </div>
          <Image
            src="/images/careers/influences.png"
            alt="The power of attention, in the palm of your hand"
            width={475}
            height={499}
          />
        </div>
      </div>

      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-between pt-5">
          <div className="d-flex gap2 w-100">
            <div className="d-flex flex-column bg-body p-4 w-30">
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

            <div className="d-flex flex-column w-70">
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
      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-center flex-column h-100">
          <div className="align-items-center d-flex">
            <div className="align-items-center d-flex p-5">
              <Title className=" w-70">
                Explore the future of your Influence, today!
              </Title>
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
