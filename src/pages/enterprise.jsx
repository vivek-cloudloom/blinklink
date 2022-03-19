import Solution from "../components/Solutions/Solution";
import enterprise from "../data/enterprise";
import Image from "next/image";
export default function EnterPrise() {
  return (
    <>
      <div className="enterprise-page">
        <div className="enterprise-page-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <h6 className="typography-6">The Turn-key</h6>
            <h4 className="typography-7">
              The Operating System for{" "}
              <span className="text-info">Marketing</span>
            </h4>
            <Image
              src="/images/enterprise/marketing.png"
              alt="marketing"
              width={256}
              height={287}
            />
          </div>
        </div>

        {enterprise.map((link) => {
          return (
            <Solution
              key={link.title}
              title={link.title}
              description={link.description}
              imageUrl={link.imageUrl}
              width={link.width}
              height={link.width}
              leftWidth="w-70"
              rightWidth="w-30"
              className="enterprise-page-item"
            />
          );
        })}

        <div className="enterprise-page-item">
          <div className="container align-items-center d-flex justify-content-center flex-column h-100">
            <div className="align-items-center d-flex">
              <Image
                src="/images/enterprise/future.png"
                alt="future"
                width={451}
                height={422}
              />
              <div className="p-5">
                <h4 className="typography-5">
                  Explore the future of your Influence, today!
                </h4>
                <div>
                  <button type="button" className="btn btn-info download-now">
                    <span className="typography-4 text-light">
                      ENTERPRISE TEAM
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
