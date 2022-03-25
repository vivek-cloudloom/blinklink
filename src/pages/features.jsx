import Head from "next/head";
import Feature from "../components/Features/Feature";
import Solution from "../components/Solutions/Solution";
import enterprise from "../data/enterprise";
import features from "../data/features";
import Image from "next/image";
import Title from "../components/common/Title";
import Paragraph from "../components/common/Paragraph";
import { Button } from "react-bootstrap";
import publish from "../../public/images/icons/publish.svg";
import advertise from "../../public/images/icons/advertise.svg";
import analyse from "../../public/images/icons/analyse.svg";
import engage from "../../public/images/icons/engage.svg";
import monitor from "../../public/images/icons/monitor.svg";
import ArrowLink from "../components/common/ArrowLink";
export default function Features() {
  return (
    <>
      <div className="home-page">
        <div className="home-item">
          <div className="container align-items-center d-flex justify-content-center flex-column default-page-height">
            <h4 className="typography-variant-15">The power of attention, </h4>
            <h4 className="typography-variant-25 torus-font text-danger">
              In the palm of your hand
            </h4>
          </div>
        </div>

        <div className="home-item">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7">
                <Title>Manage your Social Media</Title>
                <Paragraph>
                  You are the platform. Social Medias are you distrubition
                  channels. Manage and grow your audiences from BlinkLink.
                </Paragraph>

                <Image
                  src="/images/features/social.png"
                  alt="social"
                  width={637}
                  height={432}
                />
              </div>
            </div>
            {/* <div className="justify-content-center d-flex flex-column h-100 pt-5 w-60">
              
            </div> */}
            <div
              className="justify-content-center d-flex flex-column h-100 position-relative"
              style={{ top: "-160px" }}
            >
              <div className="d-flex gap1 position-relative w-100">
                <div className="align-self-end card shadow-sm border-0 p-3 bg-light rounded h-50 w-40">
                  <div className="d-flex">
                    <div className="w-50">
                      <div className="d-flex flex-column align-items-start">
                        <Image
                          src={publish}
                          alt="Publish"
                          width={26}
                          height={26}
                        />
                        <span className="typography-variant-11 torus-font">
                          Publish
                        </span>
                        <p className="text-dark typography-variant-4 mt-4">
                          Share and schedule engaging content to your profiles
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end w-50">
                      <ArrowLink type="dark" label="" />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap1 w-60">
                  <div className="d-flex gap1 w-100">
                    <div className="card shadow-sm border-0 p-3 bg-light rounded w-30">
                      <div className="d-flex">
                        <div className="w-75 mt-5">
                          <div className="d-flex flex-column align-items-start">
                            <Image
                              src={engage}
                              alt="Engage"
                              width={26}
                              height={26}
                            />
                            <span className="typography-variant-11 torus-font">
                              Engage
                            </span>
                            <p className="text-dark typography-variant-4 mt-4">
                              Address incomingmessages and delivertimely replies
                            </p>
                          </div>
                        </div>
                        <div className="w-25">
                          <ArrowLink type="dark" label="" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gap1 w-70">
                      <div className="card shadow-sm border-0 p-3 bg-light rounded">
                        <div className="d-flex">
                          <div className="w-75">
                            <div className="d-flex flex-column align-items-start">
                              <Image
                                src={monitor}
                                alt="Monitor"
                                width={26}
                                height={26}
                              />
                              <span className="typography-variant-11 torus-font">
                                Monitor
                              </span>
                              <p className="text-dark typography-variant-4 mt-4">
                                Stay informed about market trends and
                                competitors
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end w-25">
                            <ArrowLink type="dark" label="" />
                          </div>
                        </div>
                      </div>
                      <div className="card shadow-sm border-0 p-3 bg-light rounded">
                        <div className="d-flex">
                          <div className="w-75">
                            <div className="d-flex flex-column align-items-start">
                              <Image
                                src={advertise}
                                alt="Advertise"
                                width={26}
                                height={26}
                              />
                              <span className="typography-variant-11 torus-font">
                                Advertise
                              </span>
                              <p className="text-dark typography-variant-4 mt-4">
                                Promote your organic content and manage paid ads
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end w-25">
                            <ArrowLink type="dark" label="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow-sm border-0 p-3 bg-light rounded">
                    <div className="d-flex">
                      <div className="d-flex flex-column align-items-start w-25">
                        <Image
                          src={analyse}
                          alt="Analyze"
                          width={26}
                          height={26}
                        />
                        <span className="typography-variant-11 torus-font">
                          Analyze
                        </span>
                      </div>

                      <p className="text-dark typography-variant-4 mt-3">
                        Measure your results across all social networks
                      </p>
                      <div className="d-flex justify-content-end w-25">
                        <ArrowLink type="dark" label="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {features.map((link, index) => {
          return (
            <Feature
              key={`feature${index}`}
              features={link.items}
              imageUrl={link.imageUrl}
              className="home-item"
            />
          );
        })}

        <div className="home-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 offset-lg-1">
                <Title>
                  Lets take your Influence to the next level{" "}
                  <span className="text-danger">♥️</span>
                </Title>
                <div className="mt-4">
                  <Button variant="danger" className="btn-height">
                    <span className="text-light typography-variant-4">
                      Download Now
                    </span>
                  </Button>
                </div>
              </div>
              <div className="col-12 col-lg-5 text-center">
                <Image
                  src="/images/features/influence.png"
                  alt="influence"
                  width={174}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
