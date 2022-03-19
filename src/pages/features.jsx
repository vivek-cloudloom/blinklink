import Head from "next/head";
import Feature from "../components/Features/Feature";
import Solution from "../components/Solutions/Solution";
import enterprise from "../data/enterprise";
import features from "../data/features";
import Image from "next/image";
export default function Features() {
  return (
    <>
      <div className="solutions-page">
        <div className="solutions-page-item">
          <div className="container align-items-center d-flex justify-content-center flex-column default-page-height">
            <h4 className="typography-11">The power of attention, </h4>
            <h4 className="typography-7  text-danger">
              In the palm of your hand
            </h4>
          </div>
        </div>

        <div className="solutions-page-item">
          <div className="container">
            <div className="justify-content-center d-flex flex-column h-100 pt-5 w-60">
              <h4 className="typography-5">Manage your Social Media</h4>
              <p className="typography-6">
                You are the platform. Social Medias are you distrubition
                channels. Manage and grow your audiences from BlinkLink.{" "}
              </p>
              <Image
                src="/images/features/social.png"
                alt="social"
                width={637}
                height={432}
              />
            </div>
            <div className="justify-content-center d-flex flex-column h-100 position-relative" style={{ top: "-160px" }}>
              <div className="d-flex gap1 position-relative w-100">
                <div
                  className="align-self-end card shadow p-3 bg-body rounded h-50"
                  style={{ width: "40%" }}
                >
                  <div className="d-flex">
                    <div className="w-50">
                      <span className="typography-12">Publish</span>
                      <p className="text-dark text-left typography-3">
                        Share and schedule engaging content to your profiles
                      </p>
                    </div>
                    <div className="w-50"></div>
                  </div>
                </div>
                <div
                  className="d-flex flex-column gap1"
                  style={{ width: "60%" }}
                >
                  <div className="d-flex gap1 w-100">
                    <div
                      className="card shadow p-3 bg-body rounded"
                      style={{ width: "30%" }}
                    >
                      <div className="d-flex">
                        <div className="w-75">
                          <span className="typography-12">Engage</span>
                          <p className="text-dark text-left typography-3">
                            Address incomingmessages and delivertimely replies
                          </p>
                        </div>
                        <div className="w-25"></div>
                      </div>
                    </div>
                    <div
                      className="d-flex flex-column gap1"
                      style={{ width: "70%" }}
                    >
                      <div className="card shadow p-3 bg-body rounded">
                        <div className="d-flex">
                          <div className="w-75">
                            <span className="typography-12">Monitor</span>
                            <p className="text-dark text-left typography-3">
                              Stay informed about market trends and competitors
                            </p>
                          </div>
                          <div className="w-25"></div>
                        </div>
                      </div>
                      <div className="card shadow p-3 bg-body rounded">
                        <div className="d-flex">
                          <div className="w-75">
                            <span className="typography-12">Advertise</span>
                            <p className="text-dark text-left typography-3">
                              Promote your organic content and manage paid ads
                            </p>
                          </div>
                          <div className="w-25"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow p-3 bg-body rounded">
                    <div className="d-flex">
                      <span className="typography-12 w-25">Analyze</span>
                      <p className="text-dark text-left typography-3 w-50">
                        Measure your results across all social networks
                      </p>
                      <div className="w-25"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features-page">
        {features.map((link, index) => {
          return (
            <Feature
              key={`feature${index}`}
              features={link.items}
              imageUrl={link.imageUrl}
              className="features-page-item"
            />
          );
        })}
      </div>

      <div className="solutions-page">
        <div className="solutions-page-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <div className="align-items-center d-flex">
              <div className="p-5">
                <h4 className="typography-5">
                  Lets take your Influence to the next level{" "}
                  <span className="text-danger">♥️</span>
                </h4>
                <div>
                  <button type="button" className="btn btn-danger download-now">
                    <span className="typography-3">Download Now</span>
                  </button>
                </div>
              </div>
              <Image src="/images/features/influence.png" alt="influence" width={174} height={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
