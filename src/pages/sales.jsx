import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Paragraph from "../components/common/Paragraph";
export default function Features() {
  return (
    <div className="home-page blue-theme">
      <div className="home-item">
        <div className="container d-flex default-page-height flex-column sales-wrapper">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column">
                <span className="typography-variant-20">
                  How can we can <br />
                  <span className="typography-variant-20 torus-font text-info">
                    help?
                  </span>
                </span>

                <Paragraph>
                  Hop on a zoom to talk about how we can step up your influence
                  to the next level
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-item">
        <div className="container sales-form">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-6">
              <Card className="border-0 shadow-sm w-100">
                <Card.Body>
                  <Form>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>NAME</Form.Label>
                          <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>SIRNAME</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Your Sirname"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>COMPANY E-MAIL</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="example@company.com"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>COUNTRY</Form.Label>
                      <Form.Control type="text" placeholder="Italy" />
                    </Form.Group>

                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Company</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Company J.S.C"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>COMPANY SIZE</Form.Label>
                          <Form.Control type="text" placeholder="Select" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>DEPARTMENT</Form.Label>
                          <Form.Control type="text" placeholder="Select" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>ROLE</Form.Label>
                          <Form.Control type="text" placeholder="Select" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>PHONE NUMBER</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="(555) 555-5555"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>HOW CAN WE HELP YOU</Form.Label>
                          <Form.Control type="text" placeholder="Select" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <p className="typography-variant-2 mt-4">
                      Filling in optional boxes will allow us to get back to you
                      sooner and with the right team member XD
                    </p>
                    <div className="d-grid gap-2">
                      <Button variant="info" className="btn-height">
                        <span className="text-light typography-variant-10">
                          SEND
                        </span>
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
