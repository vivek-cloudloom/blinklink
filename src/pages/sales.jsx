import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Paragraph from "../components/common/Paragraph";
import countries from "../data/countries";
import { ToastContainer, toast } from "react-toastify";
export default function Features() {
  return (
    <div className="sales-page sales-blue-theme">
      <div className="container d-flex sales-wrapper">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column">
              <span className="typography-5-semibold">
                How can we can <br />
                <span className="typography-5-semibold torus-font text-info">
                  help?
                </span>
              </span>

              <Paragraph>
                Hop on a zoom to talk about how we can step up your influence to
                the next level
              </Paragraph>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <Card className="border-0 shadow-sm w-100">
              <Card.Body>
                <Form>
                  <Row>
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>NAME</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>SIRNAME</Form.Label>
                        <Form.Control type="text" placeholder="Your Sirname" />
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
                    <Form.Select aria-label="Default select example">
                      {countries.map((country) => {
                        return (
                          <option value={country.code} key={country.code}>
                            {country.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>

                  <Row>
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" placeholder="Company J.S.C" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>COMPANY SIZE</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option disabled="" selected="" value="">
                            Please select one
                          </option>
                          <option value="1-45">1–45</option>
                          <option value="46-200">46–200</option>
                          <option value="201-500">201–500</option>
                          <option value="501-2,000">501–2,000</option>
                          <option value="2,001+">2,001+</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>DEPARTMENT</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option disabled="" selected="" value="">
                            Please select one
                          </option>
                          <option value="Engineering">
                            Development/Engineering
                          </option>
                          <option value="IT">IT</option>
                          <option value="Sales">Sales</option>
                          <option value="Customer Service">
                            Support &amp; success
                          </option>
                          <option value="Marketing">Marketing</option>
                          <option value="Finance">
                            Finance/Legal/Operations
                          </option>
                          <option value="Human Resources">HR/People</option>
                          <option value="Operations">
                            Strategy/Business development
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ROLE</Form.Label>
                        <Form.Select>
                          <option disabled="" selected="" value="">
                            Please select one
                          </option>
                          <option value="CXO">CXO</option>
                          <option value="VP">VP</option>
                          <option value="Director">Director</option>
                          <option value="Manager">Manager</option>
                          <option value="Contributor">Contributor</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PHONE NUMBER</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="(555) 555-5555"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>HOW CAN WE HELP YOU</Form.Label>
                        <Form.Control type="text" placeholder="Select" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <p className="typography-1-normal mt-4">
                    Filling in optional boxes will allow us to get back to you
                    sooner and with the right team member XD
                  </p>
                  <div className="d-grid gap-2">
                    <Button
                      variant="info"
                      className="btn-height"
                      onClick={() => {
                        toast.success("Form Submitted Successfully");
                      }}
                    >
                      <span className="text-light typography-3-semibold">
                        SEND
                      </span>
                    </Button>
                    <ToastContainer
                      position="bottom-right"
                      autoClose={5000}
                      hideProgressBar
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable={false}
                      pauseOnHover
                    />
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
