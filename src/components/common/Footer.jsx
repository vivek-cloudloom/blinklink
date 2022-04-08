import { Form } from "react-bootstrap";
import Image from "next/image";
import Paragraph from "./Paragraph";
import { useRouter } from "next/router";

export default function Footer() {

  const router = useRouter();

  let theme = "bg-light";
  let footerTheme = "bg-danger text-light";
  let footerBorder = "border-light";
  if(router.pathname === "/solutions"){
    theme = "bg-danger bg-opacity-10";
    footerTheme = "bg-light text-dark";
    footerBorder = "border-dark"
  }else if(router.pathname === "/enterprise" || router.pathname === "/team"  || router.pathname === "/sales"){
    footerTheme = "bg-info text-light";
  }


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
    <div className={theme}>
      <div className="container align-items-center d-flex justify-content-between h-100 py-5">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="mb-4">
              <Image
                src="/images/logo/logo-text-dark.svg"
                alt="BlinkLink logo"
                width={307}
                height={64}
                quality={100}
              />
            </div>

            <Paragraph variant="footer">
              At BlinkLink, our mission is to accelerate the advent of the
              influencer-controlled advertisement economy.
            </Paragraph>
          </div>
          <div className="col-12 col-lg-4">
            <div className="align-items-lg-center align-items-sm-start d-flex flex-column gap-4">
              <span className="typography-3-bold">Useful Links</span>
              <ul className="list-unstyled">
                {links.map((link) => {
                  return (
                    <li key={link.title} className="typography-2-normal">
                      {link.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div>
              <span className="typography-3-bold">Subscribe Now</span>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="typography-1-normal">
                  Enter your email below to learn the latest from us. Get the
                  chance be a part of our Beta team
                </Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      <footer className={`align-items-lg-center align-items-start bg-danger d-flex flex-column flex-lg-row flex-wrap gap-lg-4 justify-content-lg-center p-2 py-1 text-light torus-font typography-1-normal ${footerTheme}` }>
        <div>
          @BlinkLink 2021. All Rights Reserved
        </div>
        <ul className="links align-items-lg-center d-flex flex-column flex-lg-row flex-wrap footer-items gap-lg-4 list-unstyled m-0">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Subsciption & Online Policy</li>
        </ul>
      </footer>
    </div>
  );
}
