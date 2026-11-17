import { Container, Card, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1>Contactez-nous</h1>

        <p className="lead">
          Une question ou une suggestion ? N'hésitez pas à nous contacter.
        </p>
      </div>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="mb-4">📞 Informations de contact</h3>

              <p>
                <strong>📧 Email :</strong> contact@traveldestinations.com
              </p>

              <p>
                <strong>📱 Téléphone :</strong> +216 70 000 000
              </p>

              <p>
                <strong>📍 Adresse :</strong> Tunis, Tunisie
              </p>

              <p>
                <strong>🕐 Horaires :</strong> Lundi - Vendredi, 08:00 - 17:00
              </p>

              <hr />

              <p className="text-muted mb-0">
                Notre équipe est disponible pour répondre à vos questions et
                vous accompagner dans vos recherches de destinations.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;