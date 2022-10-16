import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { FcOk } from "react-icons/fc";
const SuccessMsg = (props) => {
  const { setTab } = props;
  return (
    <div className={`d-flex align-items-center justify-content-center vh-100`}>
      <Row>
        <Col md={12}>
          <div className="checkCircle text-center">
            <FcOk />
          </div>
        </Col>
        <Col md={12}>
          <div className="thankTitle">Thank you for providing the feedback</div>
          <div className="thankMsg">
            We will work towards improving your experience
          </div>
        </Col>
        <Col md={12}>
          <div className={`d-flex justify-content-center align-items-center`}>
            <div
              className={`closeMsgBtn d-flex justify-content-center align-items-center`}
              role="button"
              onClick={() => {
                setTab('feeds');
              }}
            >
              Close
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SuccessMsg;
