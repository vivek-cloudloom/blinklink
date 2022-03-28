import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PageLayout({ children }) {
  const router = useRouter();

  let logo = "/images/logo/logo-danger.svg";
  let headerBg = "bg-secondary";
  let width = 214;
  let height = 51;
  if (
    router.pathname === "/enterprise" ||
    router.pathname === "/sales" ||
    router.pathname === "/team"
  ) {
    logo = "/images/logo/logo-info.svg";
    headerBg = "blue-theme-bg";
    width = 199;
    height = 38;
  }

  const [headerClass, toggleClass] = useState("");

  const listenScrollEvent = () => {
    if (document.body.scrollTop > 100) {
      toggleClass("floating-header");
    } else {
      toggleClass("fixed-blinklink-header");
    }
  };

  useEffect(() => {
    document.body.addEventListener("scroll", listenScrollEvent);
  }, []);
  const navItems = [
    {
      title: "Product",
      link: "/product",
      children: [
        {
          title: "FEATURES",
          link: "/features",
        },
      ],
    },
    { title: "Solutions", link: "/solutions" },
    { title: "Enterprise", link: "/enterprise" },
    { title: "Careers", link: "/careers" },
    { title: "Team", link: "/team" },
  ];
  return (
    // <Container fluid>
    <>
      {/* <Container> */}
      <Navbar
        expand="lg"
        fixed="top"
        collapseOnSelect={true}
        className={`${headerClass} ${headerBg} container-fluid container-xl`}
      >
        <Navbar.Brand href="/">
          <Image
            src={logo}
            alt="Blinklink logo"
            width={width}
            height={height}
            quality={100}
            className="mr-3 h-6 sm:h-10"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <Image
                src={logo}
                alt="Blinklink logo"
                width={width}
                height={height}
                quality={100}
                className="mr-3 h-6 sm:h-10"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="d-flex justify-content-around w-100">
              {navItems.map((item) => {
                return item.children ? (
                  <NavDropdown
                    key={item.title}
                    title={item.title}
                    id="basic-nav-dropdown"
                  >
                    {item.children.map((subItem) => {
                      return (
                        <Link key={subItem.title} href={subItem.link}>
                          <a className="dropdown-item typography-variant-5">{subItem.title}</a>
                        </Link>
                      );
                    })}
                  </NavDropdown>
                ) : (
                  <Link key={item.title} href={item.link}>
                    <a className="nav-link">{item.title}</a>
                  </Link>
                );
              })}

              <Nav.Link
                eventKey={2}
                href="/sales"
                className="btn btn-outline-info navigation-outline"
              >
                <span className="typography-variant-5 text-info px-xl-4">
                  Enterprise Team
                </span>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
          <Nav className="d-flex justify-content-around w-100">
            {navItems.map((item) => {
              return item.children ? (
                <NavDropdown
                  key={item.title}
                  title={item.title}
                  id="basic-nav-dropdown"
                >
                  {item.children.map((subItem) => {
                    return (
                      <Link key={subItem.title} href={subItem.link}>
                        <a className="dropdown-item typography-variant-5">{subItem.title}</a>
                      </Link>
                    );
                  })}
                </NavDropdown>
              ) : (
                <Link key={item.title} href={item.link}>
                  <a className="nav-link">{item.title}</a>
                </Link>
              );
            })}

            <Nav.Link
              eventKey={2}
              href="/sales"
              className="btn btn-outline-info navigation-outline"
            >
              <span className="typography-variant-5 text-info px-xl-4">
                Enterprise Team
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* </Container> */}
      <div>{children}</div>
      <Footer />
    </>
    // </Container>
  );
}
