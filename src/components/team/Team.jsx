import Image from "next/image";
export default function Teams({ title, description, imageUrl, className }) {
  return (
    <div className={className}>
      <div className="container align-items-center d-flex justify-content-center flex-column h-100">
        <div className="container align-items-center d-flex justify-content-between h-100 gap2">
          <div className="d-flex flex-column gap1 w-70">
            <h5 className="typography-5">{title}</h5>
            <p className="typography-6">{description}</p>
          </div>
          <div className="w-30">
          <Image
              src={imageUrl}
              alt="BlinkLink logo"
              width={250}
              height={237}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
}
