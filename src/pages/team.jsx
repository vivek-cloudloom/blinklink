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
          <div className="container d-flex default-page-height flex-column justify-content-center">
            <div className="align-items-center row">
              <div className="col-12 col-lg-5 offset-lg-1">
                <span className="typography-variant-18">
                  The Team behind <br />
                  <span className="typography-variant-27 torus-font text-danger">
                    Influence 2.0
                  </span>
                </span>
              </div>
              <div className="col-12 col-lg-6 text-center">
                <Image
                  src="/images/teams/BlinkLink-logo.png"
                  alt="BlinkLink logo"
                  width={356}
                  height={377}
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
              className="home-item"
            />
          );
        })}
      </div>

      <div className="d-flex flex-column mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-11  offset-lg-1">
              <h4 className="typography-variant-26 text-danger torus-font">
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

        <div className="p-5 profile">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-3  offset-lg-1">
                <Image
                  src={advisor.imageUrl}
                  alt="BlinkLink logo"
                  width={228}
                  height={230}
                />
              </div>
              <div className="col-12 col-lg-8">
                <h5 className="typography-variant-13">{advisor.name}</h5>
                <h5 className="typography-variant-9">{advisor.designation}</h5>
                {advisor.organizaition ? (
                  <h6 className="typography-variant-10">
                    {advisor.organizaition}
                  </h6>
                ) : null}
                <span className="typography-variant-1">{advisor.bio}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page blue-theme">
        <div className="home-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100 py-150">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <Title>Explore the future of your Influence, today!</Title>
              </div>
              <div className="col-12 col-lg-5">
                <Button variant="info" className="btn-height">
                  <span className="text-light typography-variant-5 montserrat-font">
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
