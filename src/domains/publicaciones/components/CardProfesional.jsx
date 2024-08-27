import { useEffect, useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaStar, FaWhatsapp } from "react-icons/fa";

const CardProfesional = ({ profesional, handleWhatsApp }) => {
  return (
    <Card className="me-3 mt-3 cardDetail">
      <div>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center pb-0 pb-md-2">
          <Image
            src={profesional?.worker.img}
            roundedCircle
            className="imgProfessional mb-1"
          />
          <Card.Title className="mb-0 fw-bold">
            {profesional?.worker.fullname}
          </Card.Title>
          <Card.Text className="text-center">
            {profesional?.worker.address}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted d-flex gap-3">
            <div
              className={`${
                profesional?.reviews.length === 0 ? "d-none" : "d-flex"
              } d-flex justify-content-center`}
            >
              <FaStar className="me-2 text-warning fs-5" />
              <p>4</p>
            </div>
            {profesional?.reviews.length > 0 ? (
              <p>
                {profesional?.reviews.length > 1
                  ? `${profesional?.reviews.length} valoraciones`
                  : `${profesional?.reviews.length} valoración`}
              </p>
            ) : (
              <p>Sin valoraciones</p>
            )}
          </Card.Subtitle>
          <Button
            onClick={handleWhatsApp}
            variant="success"
            className="d-none d-md-block btnWpp w-100 d-flex align-items-center justify-content-center"
          >
            <FaWhatsapp className="me-2 fs-5" />
            <span> Contactar</span>
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
};

export default CardProfesional;
