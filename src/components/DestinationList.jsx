
import { Row, Col } from 'react-bootstrap';
import DestinationCard from './DestinationCard';

function DestinationList({ destinations }) {
  if (destinations.length === 0) {
    return (
      <p className="text-center mt-4">
        Aucune destination trouvée.
      </p>
    );
  }

  return (
    <Row className="g-4">
      {destinations.map((destination) => (
        <Col key={destination.id} xs={12} sm={6} lg={4}>
          <DestinationCard destination={destination} />
        </Col>
      ))}
    </Row>
  );
}

export default DestinationList;
