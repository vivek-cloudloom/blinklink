export default function Profile({ title, description, imageUrl, className }) {
  return (
    <div className={className}>
      <div className="container align-items-center d-flex justify-content-center flex-column h-100">
        <div className="container align-items-center d-flex justify-content-between h-100 gap2">
          
          <img src={imageUrl} />
          <div className="d-flex flex-column gap1">
            <h5 className="typography-5">{title}</h5>
            <p className="typography-6">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
