import Image from "next/image";
import Title from "../common/Title";
export default function Teams({ title, description, imageUrl, className , width , height }) {
  return (
    <div className={className}>
      <div className="align-items-center container d-flex py-5">
        <div className="align-items-center row">
          <div className="col-12 col-lg-6 offset-lg-1 order-2 order-lg-1">
            <div className="d-flex flex-column gap-4">
              <Title>{title}</Title>
              {description}
              {/* <Paragraph>{description}</Paragraph> */}
            </div>
          </div>
          <div className="col-12 col-lg-5 text-center order-1 order-lg-2">
            <Image
              src={imageUrl}
              alt="BlinkLink logo"
              width={width}
              height={height}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
