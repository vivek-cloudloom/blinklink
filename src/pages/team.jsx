import Head from "next/head";
import Feature from "../components/Features/Feature";
import Solution from "../components/Solutions/Solution";
import Teams from "../components/team/Team";
import enterprise from "../data/enterprise";
import features from "../data/features";
import teamData from "../data/teams";
import Image from "next/image";
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
    </>
  );
}
