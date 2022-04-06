import Teams from "../components/team/Team";
import teamData from "../data/teams";
import Image from "next/image";
import teamsProfile from "../data/teamsProfile";
import Profile from "../components/team/Profile";
import advisor from "../data/advisors";
import Title from "../components/common/Title";
import { Button } from "react-bootstrap";
export default function Team() {
  return (
    <>
      <div className="home-page blue-theme">
        <div className="home-item">
          <div className="container d-flex flex-column justify-content-center vh-100">
            <div className="align-items-center row">
              <div className="col-12 col-lg-4 offset-lg-2 order-2 order-lg-1">
                <span className="typography-5-medium">
                  The Team behind <br />
                  <span className="typography-7-semibold torus-font text-danger">
                    Influence 2.0
                  </span>
                </span>
              </div>
              <div className="col-12 col-lg-4 text-center order-1 order-lg-2">
                <Image
                  src="/images/logo/logo-danger-icon.svg"
                  alt="BlinkLink logo"
                  width={356}
                  height={377}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        {teamData.map((link, index) => {
          return (
            <Teams
              key={link.title}
              title={link.title}
              description={link.description}
              imageUrl={link.imageUrl}
              width={link.width}
              height={link.height}
              className="home-item"
            />
          );
        })}
      </div>

      <div className="d-flex flex-column py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-11  offset-lg-1">
              <h4 className="typography-7-semibold text-danger torus-font">
                Our Team
              </h4>
            </div>
          </div>
        </div>

        <div className="profile-wrapper">
          {teamsProfile.map((profile) => {
            return <Profile data={profile} key={profile.name} />;
          })}
        </div>
      </div>

      <div className="d-flex flex-column">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-11  offset-lg-1">
              <Title className="text-danger">Advisors</Title>
            </div>
          </div>
        </div>

        <div className="py-5 profile">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-3  offset-lg-1">
                <Image
                  src={advisor.imageUrl}
                  alt="BlinkLink logo"
                  width={228}
                  height={230}
                  quality={100}
                />
              </div>
              <div className="col-12 col-lg-8">
                <h5 className="typography-4-normal">{advisor.name}</h5>
                <h5 className="typography-3-normal">{advisor.designation}</h5>
                {advisor.organizaition ? (
                  <h6 className="typography-3-semibold">
                    {advisor.organizaition}
                  </h6>
                ) : null}
                <span className="typography-1-normal">{advisor.bio}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page blue-theme">
        <div className="home-item">
          <div className="align-items-center container d-flex py-5">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <Title>Explore the future of your Influence, today!</Title>
              </div>
              <div className="col-12 col-lg-5">
                <Button variant="info" className="btn-height">
                  <span className="text-light typography-1-semibold montserrat-font">
                    Download Now
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
