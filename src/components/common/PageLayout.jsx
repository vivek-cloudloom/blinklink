import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  const navItems = [
    {
      title: "Product",
      link: "/product",
      children: [
        {
          title: "Features",
          link: "/features",
        },
        {
          title: "Menu 2",
          link: "/submenu2",
        },
        {
          title: "Menu 3",
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
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/images/logo.png"
              alt="Blinklink logo"
              width={307}
              height={64}
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
                href="#memes"
                className="btn btn-outline-primary navigation-outline"
              >
                <span className="typography-4">Enterprise Team</span>
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
