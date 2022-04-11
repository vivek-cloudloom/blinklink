import Image from "next/image";
import { useState } from "react";
export default function Profile({ data }) {

  const [showmore , toggleShowMore] = useState(false);
  return (
    <div className="py-5 profile">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3  offset-lg-1">
            <Image
              src={data.imageUrl}
              alt="BlinkLink logo"
              width={228}
              height={230}
              quality={100}
            />
          </div>
          <div className="col-12 col-lg-8">
            {" "}
            <h5 className="typography-4-normal">{data.name}</h5>
            <h5 className="typography-4-semibold">{data.designation}</h5>
            <p className={`typography-1-normal ${!showmore ? 'two-line-ellipsis' : ''}`}>{data.bio}</p>
            <button style={{background:'transparent'}} onClick={()=>{
              toggleShowMore(!showmore)
            }} className="border-0 text-info p-0">{showmore ? 'Show Less' : 'Show More' }</button>
          </div>
        </div>
      </div>
    </div>
  );
}
