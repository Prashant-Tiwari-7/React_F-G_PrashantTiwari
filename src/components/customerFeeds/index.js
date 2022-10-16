import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CustomerFeeds = (props) => {
  const { tab, setTab } = props;
  return (
    <div
      className={`reviewPgBackGround vh-100 d-flex flex-column justify-content-between`}
    >
      <Container fluid className="">
        <div className="reviewPage">
          <Row>
            <Col md={6}>
              <div className={`aromaticBar`}>Aromatic bar</div>
              <div className={`recordsFound`}>
                <span>112 records found.</span>
                <span>3 filters applied</span>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <Row>
                  <Col></Col>
                  <Col md={4}>
                    <div>
                      <div className={`d-flex searchDiv`}>
                        <input
                          className={`outline-none`}
                          type="text"
                          placeholder="Search..."
                        />
                        <div></div>
                      </div>
                    </div>
                  </Col>
                  <Col md={1}>
                    <div
                      className={`refreshDiv d-flex align-items-center justify-content-center`}
                    >
                      Ref
                    </div>
                  </Col>
                  <Col md={2}>
                    <div
                      className={`addNewBtn`}
                      role="button"
                      onClick={() => {
                          setTab("form");
                      }}
                    >
                      Add New
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div>
        <Row className={`g-0 `}>
          <Col>
            <div
              className={`formSubmitBtnDiv d-flex align-items-center justify-content-end pe-3`}
            >
              <div
                className={`submitBtn text-light bg-danger d-flex align-items-center justify-content-center`}
                role="button"
                onClick={() => {
                  //   setTab("success");
                }}
              >
                Delete
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CustomerFeeds;
