import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function OrchidDetailModal({ orchid, onClose }) {
  return (
    <Modal show={Boolean(orchid)} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fs-4">{orchid?.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex flex-column flex-md-row gap-4">
          <img
            src={orchid?.image}
            alt={orchid?.name}
            className="detail-image rounded"
          />

          <div className="flex-grow-1">
            <div className="rating mb-3" aria-label={`${orchid?.rating} out of 5 stars`}>
              {"🌸".repeat(orchid?.rating ?? 0)}
              {"💮".repeat(5 - (orchid?.rating ?? 0))}
            </div>

            <p>{orchid?.description}</p>

            <dl className="row mb-0 detail-list">
              <dt className="col-5">Category</dt>
              <dd className="col-7">
                <Badge bg="success">{orchid?.category}</Badge>
              </dd>

              <dt className="col-5">Origin</dt>
              <dd className="col-7">{orchid?.origin}</dd>

              <dt className="col-5">Color</dt>
              <dd className="col-7">{orchid?.color}</dd>

              <dt className="col-5">Light</dt>
              <dd className="col-7">{orchid?.light}</dd>

              <dt className="col-5">Water</dt>
              <dd className="col-7">{orchid?.water}</dd>

              <dt className="col-5">Temperature</dt>
              <dd className="col-7">{orchid?.temperature}</dd>
            </dl>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
