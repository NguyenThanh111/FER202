import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function OrchidCard({ orchid, onDetail }) {
  return (
    <Card className="orchid-card h-100 shadow-sm">
      <div className="orchid-image-wrapper">
        <Card.Img variant="top" src={orchid.image} alt={orchid.name} />
        {orchid.isSpecial && <span className="special-badge">Special</span>}
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title as="h2" className="fs-5">
          {orchid.name}
        </Card.Title>

        <Card.Text className="small mb-2">
          <strong>Category:</strong> {orchid.category}
        </Card.Text>
        <Card.Text className="small mb-2">
          <strong>Origin:</strong> {orchid.origin}
        </Card.Text>
        <Card.Text className="small mb-3">
          <strong>Color:</strong> {orchid.color}
        </Card.Text>

        <div className="rating mt-auto" aria-label={`${orchid.rating} out of 5 stars`}>
          {"🌸".repeat(orchid.rating)}
          {"💮".repeat(5 - orchid.rating)}
        </div>

        <Button variant="success" className="mt-3 w-100" onClick={() => onDetail(orchid)}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
}
