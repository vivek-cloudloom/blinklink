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
        <div className="w-70 d-flex flex-column gap1">
          <h5 className="typography-7">{data.name}</h5>
          <h5 className="typography-5">{data.designation}</h5>
          {data.organizaition ? (
            <h6 className="typography-5">{data.organizaition}</h6>
          ) : null}
          <p className="typography-6">{data.bio}</p>
        </div>
      </div>
    </div>
  );
}
