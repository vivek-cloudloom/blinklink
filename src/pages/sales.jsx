import Head from "next/head";
import Feature from "../components/Features/Feature";
import Solution from "../components/Solutions/Solution";
import enterprise from "../data/enterprise";
import features from "../data/features";
import Image from "next/image";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import jobs from "../data/jobs";
import JobList from "../components/career/JobList";
export default function Features() {
  return (
    <div className="enterprise-page">
      <div className="enterprise-page-item h-100">
        <div className="container d-flex justify-content-between" style={{paddingTop: "120px" , paddingBottom:"20px"}}>
          <div className="d-flex flex-column gap1 w-50">
            <span className="typography-7">
              How can we can
              <span className="text-info">help?</span>
            </span>
            <p className="typography-6">
              Hop on a zoom to talk about how we can step up your influence to
              the next level
            </p>
          </div>
          <div className="w-50 d-flex">
            <Card className="w-100">
              <Card.Body>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>SirName</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>COMPANY E-MAIL</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>COUNTRY</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>COMPANY SIZE</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>DEPARTMENT</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ROLE</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PHONE NUMBER</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>HOW CAN WE HELP YOU</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <p>
                    Filling in optional boxes will allow us to get back to you
                    sooner and with the right team member XD
                  </p>

                  <Button>SEND</Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
