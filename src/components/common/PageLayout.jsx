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
            <img
              src="/images/logo.png"
              className="mr-3 h-6 sm:h-10"
              alt="Flowbite Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
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
                        <NavDropdown.Item
                          href={subItem.link}
                          key={subItem.title}
                        >
                          {subItem.title}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                ) : (
                  <Nav.Link key={item.title} href={item.link}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes" className="btn btn-outline-primary navigation-outline">
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
