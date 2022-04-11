import Paragraph from "../components/common/Paragraph";
import Title from "../components/common/Title";

export default function Terms() {
  return (
    <div className="home-page">
      <div className="home-item">
        <div className="align-items-center container d-flex flex-column justify-content-center vh-100">
          <div className="row align-items-center">
            <div className="col-12order-lg-1">
              <Title className={'text-danger'}>Terms & Conditions</Title>
              <Paragraph className="mt-4">
              Ladies and gentlemen, the BlinkLink team is working hard on the product. We'll get to paperwork soon enough
              </Paragraph>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
