
import { Form, Row, Col } from 'react-bootstrap';
import { FaSearch, FaStar } from 'react-icons/fa';

function SearchFilter({
  search,
  setSearch,
  ratingFilter,
  setRatingFilter
}) {
  return (
    <div className="destination-filter-panel">
      <Row className="g-3 align-items-end">
        <Col md={8}>
          <Form.Group controlId="destination-search">
            <Form.Label>Où souhaitez-vous partir ?</Form.Label>
            <div className="search-input-wrap">
              <FaSearch aria-hidden="true" />
              <Form.Control
                type="search"
                placeholder="Rechercher par destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="destination-rating-filter">
            <Form.Label><FaStar aria-hidden="true" /> Note minimale</Form.Label>
            <Form.Select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
              <option value="all">Toutes les notes</option>
              <option value="5">5 étoiles</option>
              <option value="4">4 étoiles et plus</option>
              <option value="3">3 étoiles et plus</option>
              <option value="2">2 étoiles et plus</option>
              <option value="1">1 étoile et plus</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}

export default SearchFilter;
