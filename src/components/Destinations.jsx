import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import DestinationList from './DestinationList';
import SearchFilter from './SearchFilter';
import AddDestinationModal from './AddDestinationModal';

function Destinations({ destinations, setDestinations }) {
  const [search, setSearch] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const searchTerm = search.trim().toLowerCase();
  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.title.toLowerCase().includes(searchTerm) ||
      destination.country?.toLowerCase().includes(searchTerm);

    const matchesRating =
      ratingFilter === 'all' ||
      destination.rating >= Number(ratingFilter);

    return matchesSearch && matchesRating;
  });

  function handleAddDestination(newDestination) {
    const destinationWithId = {
      ...newDestination,
      id: Math.random()
    };

    setDestinations((previousDestinations) => [
      destinationWithId,
      ...previousDestinations
    ]);

    setSearch('');
    setRatingFilter('all');
    setShowModal(false);
  }

  return (
    <div>
      <header className="hero destinations-hero">
        <Container>
          <span className="eyebrow hero-eyebrow">L’inspiration au bout du monde</span>
          <h1>Choisissez votre prochaine escapade</h1>
          <p>Des idées de voyage, des infos pratiques et des lieux à découvrir.</p>
        </Container>
      </header>

      <Container className="py-5 destinations-content">
        <div className="section-header">
          <div>
            <h2>Nos destinations</h2>
            <p>Explorez les plus beaux endroits du monde.</p>
          </div>

          <Button onClick={() => setShowModal(true)}>
            <FaPlus className="me-2" />
            Ajouter
          </Button>
        </div>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
        />

        <p className="results-count">
          {filteredDestinations.length} destination(s) trouvée(s)
        </p>

        <DestinationList destinations={filteredDestinations} />

        <AddDestinationModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onAdd={handleAddDestination}
        />
      </Container>
    </div>
  );
}

export default Destinations;
