import Image from "next/image";
import { Button } from "react-bootstrap";
export default function JobList({ job }) {
  return (
    <div className="d-flex justify-content-between  py-4 border-bottom underline-border">
      <div className="d-flex gap1">
        <div style={{ width: "60px" }}>
          <Image
            src="/images/careers/Frame 28.png"
            alt="BlinkLink logo"
            width={50}
            height={32}
          />
        </div>
        <div>
          <h6 className="typography-variant-10">{job.name}</h6>
          <ul className="d-flex gap-5 m-0 p-0 typography-variant-4">
            <li className={`list-unstyled`}>{job.location}</li>
            <li className={`ps-3`}>{job.model}</li>
            <li className={`ps-3`}>{job.type}</li>
          </ul>
          {/* <span className="typography-variant-4">{job.location}</span> |{" "}
          <span className="typography-variant-4">{job.model}</span> |{" "}
          <span className="typography-variant-4">{job.type}</span> */}
        </div>
      </div>
      <div>
        <Button variant="outline-dark" className="border-2">
          <span className="typography-variant-3">Apply</span>{" "}
        </Button>
      </div>
    </div>
  );
}
