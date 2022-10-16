import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddReviewForm from "../components/addReviewForm";
import CustomerFeeds from "../components/customerFeeds";
import SuccessMsg from "../components/successMsg";
const HomeContainer = () => {
  const [tab, setTab] = useState("form");

  return (
    <div className="pageBackground vh-100">
      {tab === "form" && (
        <Container fluid>
          <Row>
            <Col md={12}>
              <div className={`mt-1`}>
                <div className={`mt-3 d-flex align-items-center headDiv px-3`}>
                  <span className=" AeromaticText">Aromatic bar</span>
                </div>
              </div>
            </Col>
          </Row>

          <AddReviewForm />
        </Container>
      )}
      {tab === "form" && (
        <div>
          <Row className={`g-0 `}>
            <Col>
              <div
                className={`formSubmitBtnDiv d-flex align-items-center justify-content-end pe-3`}
              >
                <div
                  className={`submitBtn d-flex align-items-center justify-content-center`}
                  role="button"
                  onClick={() => {
                    setTab("success");
                  }}
                >
                  Submit Review
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
      {tab === "success" && <SuccessMsg tab={tab} setTab={setTab} />}
      {tab === "feeds" && <CustomerFeeds tab={tab} setTab={setTab} />}
    </div>
  );
};

export default HomeContainer;
