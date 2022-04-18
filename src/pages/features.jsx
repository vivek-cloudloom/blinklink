import Feature from "../components/Features/Feature";
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
import Link from "next/link";
import Slider from "../components/common/slider";
export default function Features() {
  return (
    <>
      <div className="home-page">
        <div className="home-item">
          <div className="container align-items-center d-flex vh-100 justify-content-center flex-column">
            <h4 className="typography-3-medium">The power of attention, </h4>
            <h4 className="typography-6-semibold torus-font text-danger text-center">
              In the palm of your hand
            </h4>
            <Image
              src="/images/features/attention.svg"
              alt="attention"
              width={305}
              height={306}
              quality={100}
            />
          </div>
        </div>

        <div className="home-item">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-lg-7">
                <Title>Manage your Social Media</Title>
                <Paragraph>
                  You are the platform. Social Medias are you distrubition
                  channels. Manage and grow your audiences from BlinkLink.
                </Paragraph>

                <Image
                  src="/images/features/social.svg"
                  alt="social"
                  width={637}
                  height={432}
                  quality={100}
                />
              </div>
            </div>

            <div className="feature-card-wrapper justify-content-center d-flex flex-column h-100 position-relative feature-social-media">
              {/* <div className="d-flex gap-3 position-relative w-100"> */}
              <div className="row">
                <div className="col-12 col-lg-4 align-self-end mb-4 mb-lg-0">
                  <div className="card shadow-sm border-0 p-3 bg-light rounded h-100">
                    <div className="d-flex">
                      <div className="w-75">
                        <div className="d-flex flex-column align-items-start">
                          <Image
                            src={publish}
                            alt="Publish"
                            width={26}
                            height={26}
                            quality={100}
                          />
                          <span className="typography-3-semibold torus-font">
                            Publish
                          </span>
                          <p className="text-dark typography-1-normal mt-4">
                            Share and schedule engaging content to your profiles
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end w-25">
                        <ArrowLink type="dark" label="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="row">
                    <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                      <div className="card shadow-sm border-0 p-3 bg-light rounded h-100">
                        <div className="d-flex">
                          <div className="w-75">
                            <div className="d-flex flex-column align-items-start">
                              <Image
                                src={engage}
                                alt="Engage"
                                width={26}
                                height={26}
                                quality={100}
                              />
                              <span className="typography-3-semibold torus-font">
                                Engage
                              </span>
                              <p className="text-dark typography-1-normal mt-4">
                                Address incomingmessages and delivertimely
                                replies
                              </p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end w-25">
                            <ArrowLink type="dark" label="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-7">
                      <div className="row">
                        <div className="col-12">
                          <div className="card shadow-sm border-0 p-3 bg-light rounded">
                            <div className="d-flex">
                              <div className="w-80">
                                <div className="d-flex flex-column align-items-start">
                                  <Image
                                    src={monitor}
                                    alt="Monitor"
                                    width={26}
                                    height={26}
                                    quality={100}
                                  />
                                  <span className="typography-3-semibold torus-font">
                                    Monitor
                                  </span>
                                  <p className="text-dark typography-1-normal mt-1">
                                    Stay informed about market trends and
                                    competitors
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-end w-20">
                                <ArrowLink type="dark" label="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-12">
                          <div className="card shadow-sm border-0 p-3 bg-light rounded">
                            <div className="d-flex">
                              <div className="w-80">
                                <div className="d-flex flex-column align-items-start">
                                  <Image
                                    src={advertise}
                                    alt="Advertise"
                                    width={26}
                                    height={26}
                                    quality={100}
                                  />
                                  <span className="typography-3-semibold torus-font">
                                    Advertise
                                  </span>
                                  <p className="text-dark typography-1-normal mt-1">
                                    Promote your organic content and manage paid
                                    ads
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-end w-20">
                                <ArrowLink type="dark" label="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <div className="card shadow-sm border-0 p-3 bg-light rounded">
                        <div className="d-flex justify-content-between justify-content-lg-start">
                          <div className="d-flex flex-column align-items-start w-25">
                            <Image
                              src={analyse}
                              alt="Analyze"
                              width={26}
                              height={26}
                              quality={100}
                            />
                            <span className="typography-3-semibold torus-font">
                              Analyze
                            </span>
                          </div>

                          <p className="text-dark typography-1-normal mt-3 d-lg-block d-none">
                            Measure your results across all social networks
                          </p>
                          <div className="d-flex justify-content-end w-25">
                            <ArrowLink type="dark" label="" />
                          </div>
                        </div>
                        <p className="text-dark typography-1-normal mt-2 w-75 d-lg-none">
                          Measure your results across all social networks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative features-page">
          <Slider total={features} type={"danger"} />

          {features.map((link, index) => {
            return (
              <Feature
                key={`feature${index}`}
                features={link.items}
                imageUrl={link.imageUrl}
                className="features-item"
                total={features}
                current={index}
                width={link.width}
                height={link.height}
                title={link.title}
              />
            );
          })}
        </div>
        <div className="bg-body position-relative">
          <div className="align-items-center container d-flex py-5">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 offset-lg-1  order-2 order-lg-1">
                <Title>
                  Lets take your Influence to the next level{" "}
                  <span className="text-danger">♥️</span>
                </Title>
                <div className="mt-4">
                  <Link href={"/signup"}>
                    <Button variant="danger" className="btn-height">
                      <span className="text-light typography-1-normal">
                        Download Now
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-5 text-center order-1 order-lg-2">
                <Image
                  src="/images/logo/logo-danger-icon.svg"
                  alt="influence"
                  width={174}
                  height={200}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
