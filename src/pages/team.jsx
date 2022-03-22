import Head from "next/head";
import Feature from "../components/Features/Feature";
import Solution from "../components/Solutions/Solution";
import Teams from "../components/team/Team";
import enterprise from "../data/enterprise";
import features from "../data/features";
import teamData from "../data/teams";
import Image from "next/image";
import teamsProfile from "../data/teamsProfile";
import Profile from "../components/team/Profile";
import advisors from "../data/advisors";
export default function Team() {
  return (
    <>
      <div className="enterprise-page">
        <div className="enterprise-page-item">
          <div className="container align-items-center d-flex justify-content-between default-page-height">
            <div className="d-flex flex-column gap1">
              <span className="typography-7">
                The Team behind <br />
                <span className="text-danger">Influence 2.0</span>
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
              className="enterprise-page-item"
            />
          );
        })}
      </div>

      <div className="d-flex flex-column">
        <h4 className="container typography-13">Our Team</h4>

        <div className="profile-wrapper">
          {teamsProfile.map((profile) => {
            return <Profile data={profile} key={profile.name} />;
          })}
        </div>
      </div>

      <div className="d-flex flex-column">
        <h4 className="container typography-5">Advisors</h4>

        <Profile data={advisors[0]} />
      </div>

      <div className="solutions-page">
        <div className="solutions-page-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <div className="align-items-center d-flex">
              <div className="align-items-center d-flex p-5">
                <h4 className="typography-5 w-70">
                  Explore the future of your Influence, today!
                </h4>
                <button type="button" className="btn btn-info download-now">
                  <span className="typography-3">Download Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
