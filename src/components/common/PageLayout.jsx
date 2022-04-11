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
  let width = 199;
  let height = 38;
  if (
    router.pathname === "/enterprise" ||
    router.pathname === "/sales" ||
    router.pathname === "/team"
  ) {
    logo = "/images/logo/logo-info.svg";
    headerBg = "blue-theme-bg";
  }

  const [headerClass, toggleClass] = useState("");

  const listenScrollEvent = () => {
    if (window.scrollY > 100) {
      toggleClass("floating-header");
    } else {
      toggleClass("fixed-blinklink-header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  const navItems = [
    {
      title: "Product",
      link: "/product",
      children: [
        {
          title: "Features",
          link: "/features",
        },
      ],
    },
    { title: "Solutions", link: "/solutions" },
    { title: "Enterprise", link: "/enterprise" },
    { title: "Careers", link: "/careers" },
    { title: "Team", link: "/team" },
  ];

  const [showNavBar, toggleNavBar] = useState(false);
  return (
    // <Container fluid>
    <>
      {/* <Container> */}
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={`${headerClass} ${headerBg} container-fluid container-xl`}
      >
        <Navbar.Brand href="/" className="d-flex">
          <Image
            src={logo}
            alt="Blinklink logo"
            width={width}
            height={height}
            quality={100}
            className="mr-3 h-6 sm:h-10"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => {
            toggleNavBar(true);
          }}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          backdrop={true}
          show={showNavBar}
        >
          <Offcanvas.Header closeButton >
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
                    className="text-dark typography-1-medium"
                  >
                    {item.children.map((subItem) => {
                      return (
                        <Link key={subItem.title} href={subItem.link}>
                          <a className="dropdown-item typography-1-semibold text-dark"  onClick={()=>{
                          toggleNavBar(false);
                        }}>
                            {subItem.title}
                          </a>
                        </Link>
                      );
                    })}
                  </NavDropdown>
                ) : (
                  <Link key={item.title} href={item.link} >
                    <a className="nav-link text-dark typography-1-medium" onClick={()=>{
                    toggleNavBar(false);
                  }}>
                      {item.title}
                    </a>
                  </Link>
                );
              })}

              <Link href="/sales">
                <a className="btn btn-outline-info navigation-outline"  onClick={()=>{
                          toggleNavBar(false);
                        }}>
                  <span className="typography-1-semibold text-info px-xl-4  montserrat-font text-uppercase">
                    Enterprise Team
                  </span>
                </a>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between mx-3 d-none d-lg-block"
        >
          <Nav>
            {navItems.map((item) => {
              return item.children ? (
                <NavDropdown
                  key={item.title}
                  title={item.title}
                  id="basic-nav-dropdown"
                  className="text-dark typography-1-medium mx-2"
                >
                  {item.children.map((subItem) => {
                    return (
                      <Link key={subItem.title} href={subItem.link}>
                        <a className="dropdown-item typography-1-semibold text-dark">
                          {subItem.title}
                        </a>
                      </Link>
                      // <NavDropdown.Item
                      //   href={subItem.link}
                      //   key={subItem.title}
                      // >
                      //   {subItem.title}
                      // </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              ) : (
                // <Nav.Link key={item.title} href={item.link}>
                //   {item.title}
                // </Nav.Link>
                <Link key={item.title} href={item.link}>
                  <a className="nav-link text-dark typography-1-medium mx-2">
                    {item.title}
                  </a>
                </Link>
              );
            })}
          </Nav>
          <Nav>
            <Link href="/sales">
              <a className="btn btn-outline-info navigation-outline">
                <span className="typography-1-semibold text-info px-lg-1 px-xl-4 text-uppercase">
                  Enterprise Team
                </span>
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>

        {/* <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
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
                        <a className="dropdown-item typography-1-semibold">{subItem.title}</a>
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
              <span className="typography-1-semibold text-info px-xl-4  montserrat-font text-uppercase">
                Enterprise Team
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
      {/* </Container> */}
      <div>{children}</div>
      <Footer />
    </>
    // </Container>
  );
}
