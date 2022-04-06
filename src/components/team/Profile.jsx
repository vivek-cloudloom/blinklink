import Image from "next/image";
export default function Profile({ data }) {
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
            <p className="typography-1-normal">{data.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
