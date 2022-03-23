import Image from "next/image";
export default function Profile({ data }) {
  return (
    <div className="p-5 profile">
      <div className="container  d-flex ">
        <div className="w-30">
          <Image
            src={data.imageUrl}
            alt="BlinkLink logo"
            width={228}
            height={230}
          />
        </div>
        <div className="w-70 d-flex flex-column">
          <h5 className="typography-variant-13">{data.name}</h5>
          <h5 className="typography-variant-15">{data.designation}</h5>
          <p className="typography-variant-1">{data.bio}</p>
        </div>
      </div>
    </div>
  );
}
