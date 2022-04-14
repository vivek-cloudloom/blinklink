import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Paragraph from "../components/common/Paragraph";
import countries from "../data/countries";
import { ToastContainer, toast } from "react-toastify";
import Title from "../components/common/Title";
import { useState } from "react";
import { validateEmail } from "../util/util";
export default function signup() {
  const [email, updateEmail] = useState("");
  const submitEmail = (e) => {
    if (e.keyCode === 13) {
      subscribeEmail();
    }
  };

  const subscribeEmail = () => {
    if (validateEmail(email)) {
      toast.success("Thank you for subscribing");
    } else {
      toast.error("Please enter valid email");
    }
  };
  return (
    <div className="home-page signup-page">
      <div className="home-item">
        <div className="container d-flex vh-100">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex flex-column gap-4">
                {/* <span className="typography-5-medium">
                 
                </span> */}
                <Title> Sign Up</Title>
                <p className="typography-2-normal">
                  Our team is working passionately to deliver the public-ready
                  BlinkLink Creator app! Enter your email for the chance to join
                  our Beta team full of early adopters who believe in the power
                  of their attention! Also, receive and be up to late with the
                  latest in the rapidly growing BlinkLink community
                </p>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        onKeyDown={submitEmail}
                        value={email}
                        onChange={(e) => {
                          updateEmail(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Button
                      variant="dark"
                      className="btn-height"
                      onClick={subscribeEmail}
                    >
                      <span className="text-light typography-1-normal">
                        Subscribe
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
