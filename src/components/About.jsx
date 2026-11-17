import { Container, Card, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1>À propos de Travel Destinations</h1>

        <p className="lead">
          Une application simple pour découvrir et explorer des destinations
          touristiques.
        </p>
      </div>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🌍 Présentation</Card.Title>

              <Card.Text>
                Travel Destinations est une application web permettant aux
                utilisateurs de découvrir différentes destinations dans le
                monde.
              </Card.Text>

              <Card.Text>
                Chaque destination présente plusieurs informations utiles :
                le pays, la description, le prix, la note, la durée du vol,
                la compagnie aérienne et la meilleure saison pour voyager.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🎯 Nos objectifs</Card.Title>

              <Card.Text>
                L'objectif de l'application est de faciliter la recherche et
                la comparaison des destinations touristiques.
              </Card.Text>

              <ul>
                <li>Découvrir de nouvelles destinations</li>
                <li>Consulter les informations de voyage</li>
                <li>Filtrer les destinations selon leur rating</li>
                <li>Rechercher rapidement une destination</li>
                <li>Ajouter de nouvelles destinations</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;