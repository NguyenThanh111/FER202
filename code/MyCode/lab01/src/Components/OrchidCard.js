export default function OrchidCard({ orchid }) {
  return (
    <div className="orchid-card">
      <div className="orchid-image-wrapper">
        <img className="orchid-image" src={orchid.image} alt={orchid.name} />

        {orchid.isSpecial && <span className="special-badge">Special</span>}
      </div>

      <div className="orchid-content">
        <h2>{orchid.name}</h2>

        <p>
          <strong>Category:</strong> {orchid.category}
        </p>
        <p>
          <strong>Origin:</strong> {orchid.origin}
        </p>
        <p>
          <strong>Color:</strong> {orchid.color}
        </p>

        <div className="rating" aria-label={`${orchid.rating} out of 5 stars`}>
          {"🌸".repeat(orchid.rating)}
          {"💮".repeat(5 - orchid.rating)}
        </div>
      </div>
    </div>
  );
}
