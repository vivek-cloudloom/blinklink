import Head from "next/head";
import Feature from "../components/Features/Feature";
import Solution from "../components/Solutions/Solution";
import enterprise from "../data/enterprise";
import features from "../data/features";
import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import jobs from "../data/jobs";
import JobList from "../components/career/JobList";
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
  return (
    <div className="home-page">
      <div className="home-item">
        <div className="container align-items-center d-flex justify-content-between default-page-height">
          <div className="d-flex flex-column gap1">
            <span className="typography-1">
              Revolutionize how the world{" "}
              <span className="text-danger">Influences</span>
            </span>
            <span className="typography-2">
              Work alongside the most amazing teammates in a culture that is all
              about rewarding innovation.
            </span>
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
            <div className="d-flex flex-column bg-light p-4 w-30">
              <h3 className="typography-12 border-bottom">FILTER JOBS</h3>

              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />

              <Form>
                <div className="mb-3">
                  <Form.Check
                    inline
                    label="Miami"
                    name="group1"
                    type="checkbox"
                    className="typography-3 text-dark"
                  />
                  <Form.Check
                    inline
                    label="Dubai"
                    name="group1"
                    type="checkbox"
                    className="typography-3 text-dark"
                  />
                  <Form.Check
                    inline
                    label="Bangalore"
                    name="group1"
                    type="checkbox"
                    className="typography-3 text-dark"
                  />
                </div>
              </Form>
              <span className="typography-12 my-4">JOB TYPE</span>
              <Form>
                <div className="mb-3">
                  {items.map((item) => {
                    return (
                      <Form.Check
                        label={item}
                        name="group2"
                        type="checkbox"
                        className="typography-3 text-dark"
                      />
                    );
                  })}
                </div>
              </Form>
              <Button className="bg-dark">Blinklink</Button>
            </div>

            <div className="d-flex flex-column w-70">
              <div className="border-bottom">
                <h3 className="typography-12 ">Jobs</h3>
              </div>

              <div className="d-flex flex-column gap2 mt-3">
                {jobs.map((job) => {
                  return <JobList job={job} key={job.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="solutions-page">
        <div className="solutions-page-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <div className="align-items-center d-flex">
              <div className="align-items-center d-flex p-5">
                <h4 className="typography-5 w-70">
                  Explore the future of your Influence, today!
                </h4>
                <button type="button" className="btn btn-danger download-now">
                  <span className="typography-3">Download Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
