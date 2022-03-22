import { Form } from "react-bootstrap";
import Image from "next/image";
export default function Footer() {
  const links = [
    { title: "Home", link: "Home" },
    { title: "Features", link: "Features" },
    { title: "Solutions", link: "Solutions" },
    { title: "Enterprise", link: "Enterprise" },
    { title: "Careers", link: "Careers" },
    { title: "Team", link: "Team" },
    { title: "Enterprise Team", link: "Enterprise Team" },
  ];
  return (
    <>
      <div className="container align-items-center d-flex justify-content-between h-100 blink-link pt-5 pb-5">
        <div>
          <div className="mb-4">
            <Image
              src="/images/BlinkLink-logo.png"
              alt="BlinkLink logo"
              width={307}
              height={64}
            />
          </div>

          <p className="typography-2">
            At BlinkLink, our mission is to accelerate the advent of the
            influencer-controlled advertisement economy.
          </p>
        </div>
        <div>
          <span className="typography-8">Useful Links</span>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.title} className="typography-2">
                  {link.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <span className="typography-8">Subscribe Now</span>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="typography-9">
              Enter your email below to learn the latest from us. Get the chance
              be a part of our Beta team
            </Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
        </div>
      </div>
      <footer className="align-items-center bg-danger d-flex flex-wrap gap2 justify-content-center py-1">
        <div className="typography-10">
          @BlinkLink 2021. All Rights Reserved
        </div>
        <ul className="footer-items align-items-center d-flex gap2 flex-wrap  list-unstyled m-0 typography-10">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Subsciption & Online Policy</li>
        </ul>
      </footer>
    </>
  );
}
