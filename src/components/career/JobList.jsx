import Image from "next/image";
import { Button } from "react-bootstrap";
export default function JobList({ job }) {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex gap1">
        <div style={{width : "60px"}}>
        <Image
          src="/images/careers/Frame 28.png"
          alt="BlinkLink logo"
          width={50}
          height={32}
        />
        </div>
        <div>
          <h6 className="typography-6">{job.name}</h6>
          <span className="typography-3 text-dark">{job.location}</span> |{" "}
          <span className="typography-3 text-dark">{job.model}</span> |{" "}
          <span className="typography-3 text-dark">{job.type}</span>
        </div>
      </div>
      <div>
        <Button variant="outline-dark" className="typography-3  text-dark">Apply</Button>
      </div>
    </div>
  );
}
