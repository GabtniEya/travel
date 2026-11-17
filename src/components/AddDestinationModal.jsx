
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddDestinationModal({ show, onHide, onAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    country: '',
    description: '',
    price: '',
    rating: '5',
    image: '',
    flightDuration: '',
    airline: '',
    bestSeason: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newDestination = {
      id: Date.now(),
      title: formData.title.trim(),
      country: formData.country.trim(),
      description: formData.description.trim(),
      price: Number(formData.price),
      rating: Number(formData.rating),
      image: formData.image.trim() || 
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
      flightDuration: formData.flightDuration.trim(),
      airline: formData.airline.trim(),
      bestSeason: formData.bestSeason.trim()
    };

    onAdd(newDestination);

    setFormData({
      title: '',
      country: '',
      description: '',
      price: '',
      rating: '5',
      image: '',
      flightDuration: '',
      airline: '',
      bestSeason: ''
    });

    onHide();
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une destination</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Exemple : Tokyo"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Pays (facultatif)</Form.Label>
            <Form.Control
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Exemple : Japon"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Durée du vol (facultatif)</Form.Label>
            <Form.Control
              name="flightDuration"
              value={formData.flightDuration}
              onChange={handleChange}
              placeholder="Exemple : 3h 30min"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Compagnie aérienne (facultatif)</Form.Label>
            <Form.Control
              name="airline"
              value={formData.airline}
              onChange={handleChange}
              placeholder="Exemple : Tunisair"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Meilleure saison (facultatif)</Form.Label>
            <Form.Control
              name="bestSeason"
              value={formData.bestSeason}
              onChange={handleChange}
              placeholder="Exemple : Printemps"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Prix (TND)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Note</Form.Label>
            <Form.Select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            >
              <option value="5">5 étoiles</option>
              <option value="4">4 étoiles</option>
              <option value="3">3 étoiles</option>
              <option value="2">2 étoiles</option>
              <option value="1">1 étoile</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL de l'image (facultatif)</Form.Label>
            <Form.Control
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Annuler
          </Button>

          <Button variant="primary" type="submit">
            Ajouter
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddDestinationModal;
