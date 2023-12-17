import React from "react";
import { Badge, Card, ListGroup } from "react-bootstrap";
import { LiaCheckSolid, LiaCubeSolid, LiaCubesSolid, LiaSquare, LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

interface IPriceCardProps {
  price: string;
  productName: "Core" | "Professional" | "Deluxe";
  productNameAbbr: string;
  shortDescription: string;
  longDescription: string;
  basicFeatures: boolean;
  expandedThemes: boolean;
  businessAnalytics: boolean;
  available: boolean;
  headerBackgroundClass?: string;
  bodyBackgroundClass?: string;
}

const PriceCard = (props: IPriceCardProps) => {
  const {
    price,
    productName,
    productNameAbbr,
    shortDescription,
    longDescription,
    basicFeatures,
    expandedThemes,
    businessAnalytics,
    available,
    headerBackgroundClass,
    bodyBackgroundClass,
  } = props;

  const icon =
    productName === "Core" ? (
      <LiaSquare className="display-1" style={{ width: "4rem !important" }} />
    ) : productName === "Professional" ? (
      <LiaCubesSolid className="display-1" style={{ width: "4rem !important" }} />
    ) : (
      <LiaCubeSolid className="display-1" style={{ width: "4rem !important" }} />
    );

  return (
    <Card className={`flex-row flex-lg-column border-4 border-black rounded-3 ${bodyBackgroundClass}`}>
      <Card.Header className={`d-flex flex-column justify-content-center rounded-0 ${headerBackgroundClass}`}>
        <h5 className="mb-0 d-none d-lg-flex justify-content-center justify-content-lg-end">
          <Badge className="bg-dark">{price}</Badge>
        </h5>
        <div className="d-flex flex-column align-items-center">
          {icon}
          <h2 className="fw-bold d-lg-none">{productNameAbbr}</h2>
          <h2 className="fw-bold d-none d-lg-block">{productName}</h2>
          <Badge className="bg-dark d-lg-none">{price}</Badge>
        </div>
      </Card.Header>
      <Card.Body className="bg-light border-bottom">
        <p className="small d-lg-none">{shortDescription}</p>
        <p className="small d-none d-lg-block">{longDescription}</p>
        <ListGroup className="list-group-flush border-0">
          <ListGroup.Item className="border shadow-sm small d-flex">
            {basicFeatures ? (
              <LiaCheckSolid className="fs-5 text-success" />
            ) : (
              <LiaTimesSolid className="fs-5 text-danger" />
            )}
            <span className="small fw-bold ms-1">Basic Features</span>
          </ListGroup.Item>
          <ListGroup.Item className="border shadow-sm small d-flex">
            {expandedThemes ? (
              <LiaCheckSolid className="fs-5 text-success" />
            ) : (
              <LiaTimesSolid className="fs-5 text-danger" />
            )}
            <span className="small fw-bold ms-1">Expanded Themes & SEO</span>
          </ListGroup.Item>
          <ListGroup.Item className="border shadow-sm small d-flex">
            {businessAnalytics ? (
              <LiaCheckSolid className="fs-5 text-success" />
            ) : (
              <LiaTimesSolid className="fs-5 text-danger" />
            )}
            <span className="small fw-bold ms-1">Powerful Business Analytics</span>
          </ListGroup.Item>
        </ListGroup>
        {available ? (
          <Link to="/get-started" className="d-lg-none btn btn-dark bg-black rounded-pill w-100 mt-3">
            Select
          </Link>
        ) : (
          <button disabled={true} className="d-lg-none btn btn-dark bg-black rounded-pill w-100 mt-3">
            Coming soon...
          </button>
        )}
      </Card.Body>
      <Card.Body className="d-none d-lg-block">
        {available ? (
          <Link to="/get-started" className="btn btn-dark btn-lg bg-black rounded-pill w-100">
            Select
          </Link>
        ) : (
          <button disabled={true} className="btn btn-dark btn-lg bg-black rounded-pill w-100">
            Coming soon...
          </button>
        )}
      </Card.Body>
    </Card>
  );
};

export default PriceCard;
