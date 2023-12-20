import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <main
      className="pricing-main"
      style={{
        background: "url('/images/wave.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}>
      <Container className="py-5 py-lg-0 d-flex mh100vh">
        <Row className="py-5 align-items-center">
          <Col lg={4} className="py-3">
            <PriceCard
              price={"Free"}
              productName="Core"
              productNameAbbr="Core"
              shortDescription="Everything you need to get your essential business information online."
              longDescription="Everything you need to get your essential business information online."
              basicFeatures={true}
              expandedThemes={false}
              businessAnalytics={false}
              available={true}
              headerBackgroundClass="home-try-it-now"
            />
          </Col>
          <Col lg={4} className="py-3">
            <PriceCard
              price={"n/a"}
              productName="Professional"
              productNameAbbr="Pro"
              shortDescription="Powerful tools and analytics to drive site traffic and customer engagement."
              longDescription="Harness our powerful business tools to optimize traffic to your website and access powerful data
                  analytics to drive growth."
              basicFeatures={true}
              expandedThemes={true}
              businessAnalytics={true}
              available={false}
              bodyBackgroundClass="bg-custom-yellow"
            />
          </Col>
          <Col lg={4} className="py-3">
            <PriceCard
              price={"n/a"}
              productName="Deluxe"
              productNameAbbr="Lux"
              shortDescription="For businesses that want to stand out from their competition."
              longDescription="For businesses that want to stand out from their competition."
              basicFeatures={true}
              expandedThemes={true}
              businessAnalytics={false}
              available={false}
              bodyBackgroundClass="bg-custom-blue"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default Pricing;
