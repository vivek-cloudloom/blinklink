import Image from "next/image";
import Paragraph from "../common/Paragraph";
import Title from "../common/Title";
export default function Teams({ title, description, imageUrl, className }) {
  return (
    <div className={className}>
      <div className="container align-items-center d-flex justify-content-between h-100">
        <div className="align-items-center row">
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className="d-flex flex-column gap-4">
              <Title>{title}</Title>
              <Paragraph>{description}</Paragraph>
            </div>
          </div>
          <div className="col-12 col-lg-5 text-center">
            <Image
              src={imageUrl}
              alt="BlinkLink logo"
              width={250}
              height={237}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
