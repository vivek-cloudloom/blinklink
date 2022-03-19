import Image from "next/image";
export default function Feature({ features, imageUrl, className }) {
  return (
    <div className={className}>
      <div className="container align-items-center d-flex justify-content-center flex-column h-100">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <div className="w-60">
            {features &&
              features.map((feature) => {
                return (
                  <div className="d-flex flex-column gap1" key={feature.title}>
                    <h5 className="typography-5">{feature.title}</h5>
                    <p className="typography-6">{feature.description}</p>
                  </div>
                );
              })}
          </div>
          <div className="w-40"> 
          <Image src={imageUrl} alt="social" width={420} height={504} />
          </div>
          
        </div>
      </div>
    </div>
  );
}
