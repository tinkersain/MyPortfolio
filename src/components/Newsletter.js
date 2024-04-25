import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import "./all.css";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Have A Query !<br></br> JUST POKE ME
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} sm={4}>
            <div className="news-letter">
              <div className="news-email">
                <input
                  type="email"
                  name="email-input"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="news-submit">
                <button>Sumbit</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
