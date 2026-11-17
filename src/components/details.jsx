import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import RatingStars from './RatingStars';

function DestinationDetails({ destinations }) {
  const { id } = useParams();
  const destination = destinations.find(
    (item) => String(item.id) === id
  );

  if (!destination) {
    return (
      <Container className="py-5 text-center">
        <h1>Destination introuvable</h1>
        <Button as={Link} to="/destinations" className="mt-3">
          Retour aux destinations
        </Button>
      </Container>
    );
  }

  const details = [
    ['Pays', destination.country],
    ['Durée du vol', destination.flightDuration],
    ['Compagnie aérienne', destination.airline],
    ['Meilleure saison', destination.bestSeason]
  ].filter(([, value]) => value);

  return (
    <Container className="py-5">
      <Button as={Link} to="/destinations" variant="outline-primary" className="mb-4">
        Retour aux destinations
      </Button>

      <Card className="shadow-sm">
        {destination.image && (
          <Card.Img
            variant="top"
            src={destination.image}
            alt={destination.title}
            className="destination-image"
          />
        )}
        <Card.Body>
          <Row className="g-4">
            <Col md={8}>
              <Card.Title as="h1">{destination.title}</Card.Title>
              {destination.country && (
                <p className="text-muted">{destination.country}</p>
              )}
              <Card.Text>{destination.description}</Card.Text>
              <RatingStars rating={destination.rating} />
            </Col>
            <Col md={4}>
              <h2 className="h5">Informations de voyage</h2>
              <dl className="mb-0">
                {details.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
                {destination.price != null && (
                  <>
                    <dt>Prix</dt>
                    <dd>{destination.price} TND</dd>
                  </>
                )}
              </dl>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DestinationDetails;