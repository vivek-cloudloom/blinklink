import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useEffect, useState  } from "react";

export default function PageLayout({ children }) {

  const router = useRouter();

  let logo = "/images/logo.png";
  let headerBg = "bg-secondary";
  let width = 214;
  let height=51;
  if(router.pathname === "/enterprise" || router.pathname === "/sales"){
    logo = "/images/logo-blue.png";
    headerBg= "blue-theme-bg";
    width = 199;
    height=38;
  }


  const [headerClass, toggleClass] = useState("");

  const listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      toggleClass("floating-header");
    } else {
      toggleClass("");
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
          title: "FEATURES",
          link: "/features",
        },
        {
          title: "VALUING INFLUENCE",
          link: "/submenu2",
        },
        {
          title: "INTEGRATIONS",
          link: "/submenu3",
        },
        {
          title: "DOWNLOAD THE APP",
          link: "/submenu3",
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
      <Navbar expand="lg" fixed="top" className={`${headerClass} ${headerBg}`}>
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={logo}
              alt="Blinklink logo"
              width={width}
              height={height}
              className="mr-3 h-6 sm:h-10"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="me-auto">
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
                          <a className="dropdown-item">{subItem.title}</a>
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
                    <a className="nav-link">{item.title}</a>
                  </Link>
                );
              })}
            </Nav>
            <Nav>
              <Nav.Link
                eventKey={2}
                href="/sales"
                className="btn btn-outline-info navigation-outline"
              >
                <span className="typography-variant-5 text-info">Enterprise Team</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{children}</div>
      <Footer />
    </>
    // </Container>
  );
}
