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
          <div className="container align-items-center d-flex justify-content-between default-page-height">
            <div className="d-flex flex-column gap1">
              <span className="typography-variant-18">
                The Team behind <br />
                <span className="typography-variant-27 torus-font text-danger">
                  Influence 2.0
                </span>
              </span>
            </div>
            <Image
              src="/images/teams/BlinkLink-logo.png"
              alt="BlinkLink logo"
              width={356}
              height={377}
            />
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
        <h4 className="container typography-variant-26 text-danger torus-font">
          Our Team
        </h4>

        <div className="profile-wrapper">
          {teamsProfile.map((profile) => {
            return <Profile data={profile} key={profile.name} />;
          })}
        </div>
      </div>

      <div className="d-flex flex-column">
        <Title className="container text-danger">Advisors</Title>

        <div className="p-5 profile">
          <div className="container  d-flex ">
            <div className="w-30">
              <Image
                src={advisor.imageUrl}
                alt="BlinkLink logo"
                width={228}
                height={230}
              />
            </div>
            <div className="w-70 d-flex flex-column">
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

      <div className="home-page blue-theme">
        <div className="home-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <div className="align-items-center d-flex">
              <div className="align-items-center d-flex p-5">
                <Title className="w-70">
                  Explore the future of your Influence, today!
                </Title>
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
