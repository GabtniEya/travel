import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import RatingStars from './RatingStars';

function DestinationCard({ destination }) {
  return (
    <Card
      as={Link}
      to={`/destinations/${destination.id}`}
      className="destination-card h-100 shadow-sm text-decoration-none text-reset"
    >
      <div className="destination-card-image">
        <Card.Img
          variant="top"
          src={destination.image}
          alt={destination.title}
          className="destination-image"
        />
        <Badge bg="light" className="price-badge">
          {destination.price} TND
        </Badge>
      </div>

      <Card.Body>
        <div className="destination-card-heading">
          <div>
            {destination.country && (
              <p className="destination-country">
                <FaMapMarkerAlt aria-hidden="true" />
                {destination.country}
              </p>
            )}
            <Card.Title>{destination.title}</Card.Title>
          </div>
          <div className="destination-rating">
            <RatingStars rating={destination.rating} />
            <span>{Number(destination.rating) || 0}/5</span>
          </div>
        </div>

        <Card.Text className="destination-description">
          {destination.description}
        </Card.Text>

        {(destination.flightDuration || destination.bestSeason) && (
          <div className="destination-meta">
            {destination.flightDuration && <span>{destination.flightDuration} de vol</span>}
            {destination.bestSeason && <span>Idéal : {destination.bestSeason}</span>}
          </div>
        )}

        <span className="destination-card-link">
          Découvrir <span aria-hidden="true">→</span>
        </span>
      </Card.Body>
    </Card>
  );
}

export default DestinationCard;