import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const AddReviewForm = (props) => {
  return (
    <div className={`mt-3 mb-3 px-3 formStyle`}>
      <div className={`mt-1 mb-1`}>
        <Form className={`pt-4`}>
          <Row className={`pt-1`}>
            <Col md={6}>
              <Form.Group
                className="mb-3 shadow-none"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className={`formLabel`}>
                  Customer Name<span className="Astrix">*</span>
                </Form.Label>
                <Form.Control
                  className={`inputStyle`}
                  type="text"
                  placeholder="E.g. jon snow"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group
                className="mb-3 shadow-none"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Email <span className="Astrix">*</span>
                </Form.Label>
                <Form.Control
                  className={`inputStyle`}
                  type="email"
                  placeholder="E.g. abc@gmail.com"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group
                className="mb-3 shadow-none"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className={`formLabel`}>
                  Phone<span className="Astrix">*</span>
                </Form.Label>
                <Form.Control
                  className={`inputStyle`}
                  type="text"
                  placeholder="9999999999"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group
                className="mb-3 shadow-none"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className={`formLabel`}>
                  Was our restaurant clean?<span className="Astrix">*</span>
                </Form.Label>
                <Row>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Excellent `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Good `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Fair `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Bad `}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group
                className="mb-3 shadow-none"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className={`formLabel`}>
                  Please rate your overall dining experience.
                  <span className="Astrix">*</span>
                </Form.Label>
                <Row>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Excellent `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Good `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Fair `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Bad `}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group
                className="mb-3 shadow-none"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className={`formLabel`}>
                  Please rate the quality of the service you received from your
                  host.<span className="Astrix">*</span>
                </Form.Label>
                <Row>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Excellent `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Good `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Fair `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Bad `}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group
                className="mb-3 shadow-none"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className={`formLabel`}>
                  Please rate the quality of your beverage.
                  <span className="Astrix">*</span>
                </Form.Label>
                <Row>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Excellent `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Good `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Fair `}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      role="button"
                      className={`checkBoxStyle`}
                      type="checkbox"
                      id={`default-q`}
                      label={`Bad `}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddReviewForm;
