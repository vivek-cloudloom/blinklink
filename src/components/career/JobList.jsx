import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
export default function JobList({ job }) {

  const [screenSize, setDimention] = useState(0);
  useEffect(()=>{
    setDimention(window.screen.width)
  } , [])
  return (
      <div className="row py-4 border-bottom underline-border">
        <div className="col-12 col-lg-9">
          <div className="d-flex gap-2">
            <div>
              <Image
                src="/images/careers/Frame 28.png"
                alt="BlinkLink logo"
                width={52}
                height={52}
                quality={100}
              />
            </div>
            <div>
              <h6 className="typography-3-semibold mb-0">{job.name}</h6>
              <ul className="d-flex flex-column flex-lg-row flex-wrap gap-lg-5 m-0 p-lg-0 ps-3 ps-lg-0 typography-1-normal">
                <li className={`${screenSize >= 992 ? " list-unstyled" : ""}`}>{job.location}</li>
                <li className={`ps-lg-3`}>{job.model}</li>
                <li className={`ps-lg-3`}>{job.type}</li>
              </ul>
              {/* <span className="typography-1-normal">{job.location}</span> |{" "}
          <span className="typography-1-normal">{job.model}</span> |{" "}
          <span className="typography-1-normal">{job.type}</span> */}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 text-end">
          <Button variant="outline-dark" className="border-2 mt-3 mt-lg-0 btn-height px-lg-4">
            <span className="typography-1-semibold">Apply</span>{" "}
          </Button>
        </div>
      </div>
  );
}
