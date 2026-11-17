import { Container, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGlobeAmericas, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

const featuredDestinations = [
  {
    name: 'Bali',
    country: 'Indonésie',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900',
    className: 'featured-bali'
  },
  {
    name: 'Santorin',
    country: 'Grèce',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=900',
    className: 'featured-santorini'
  },
  {
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900',
    className: 'featured-paris'
  }
];

function Home() {
  return (
    <>
      <header className="hero home-hero">
        <Container className="home-hero-content">
          <span className="eyebrow hero-eyebrow">
            <FaGlobeAmericas aria-hidden="true" />
            Le monde vous attend
          </span>
          <h1>Le prochain voyage sera <span>inoubliable.</span></h1>
          <p>
            Des escapades près de chez vous aux horizons lointains, trouvez
            l’inspiration pour votre prochaine aventure.
          </p>
          <div className="hero-actions">
            <Button as={Link} to="/destinations" size="lg">
              Explorer les destinations <FaArrowRight aria-hidden="true" />
            </Button>
            <span className="hero-note">
              <FaHeart aria-hidden="true" /> Des idées pour chaque envie
            </span>
          </div>
          <div className="hero-stats" aria-label="Quelques chiffres">
            <div><strong>6+</strong><span>destinations</span></div>
            <div><strong>4,5</strong><span>note moyenne</span></div>
            <div><strong>∞</strong><span>envies d’ailleurs</span></div>
          </div>
        </Container>
      </header>

      <Container className="home-content">
        <section className="featured-section" aria-labelledby="featured-title">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Un peu d’inspiration</span>
              <h2 id="featured-title">Des lieux qui font rêver</h2>
              <p>Trois idées pour commencer à imaginer votre prochain départ.</p>
            </div>
            <Button as={Link} to="/destinations" variant="outline-primary" className="text-nowrap">
              Tout explorer <FaArrowRight aria-hidden="true" />
            </Button>
          </div>

          <Row className="g-4">
            {featuredDestinations.map((destination) => (
              <Col key={destination.name} md={4}>
                <Link
                  to="/destinations"
                  className={`featured-card ${destination.className}`}
                  style={{ backgroundImage: `url("${destination.image}")` }}
                >
                  <span className="featured-card-location">
                    <FaMapMarkerAlt aria-hidden="true" />
                    {destination.country}
                  </span>
                  <span className="featured-card-title">{destination.name}</span>
                  <span className="featured-card-arrow" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </Link>
              </Col>
            ))}
          </Row>
        </section>

        <section className="home-cta">
          <div>
            <span className="eyebrow">Prêt à partir ?</span>
            <h2>Votre prochaine histoire commence ici.</h2>
            <p>Comparez les destinations et trouvez celle qui vous ressemble.</p>
          </div>
          <Button as={Link} to="/destinations" size="lg">
            Trouver ma destination <FaArrowRight aria-hidden="true" />
          </Button>
        </section>
      </Container>
    </>
  );
}

export default Home;