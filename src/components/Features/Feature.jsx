export default function Feature({ features, imageUrl, className }) {
  return (
    <div className={className}>
      <div className="container align-items-center d-flex justify-content-center flex-column h-100">
        <div className="container align-items-center d-flex justify-content-between h-100">
          <div>
            {features && features.map((feature) => {
              return (
                <div className="d-flex flex-column gap1" key={feature.title}>
                  <h5 className="typography-5">{feature.title}</h5>
                  <p className="typography-6">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}
