
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import DestinationDetails from './components/Details';
import Destinations from './components/Destinations';
import Navbar from './components/Navbar';

const initialDestinations = [
  {
    id: Math.random(),
    title: 'Paris',
    country: 'France',
    description: 'Découvrez la Tour Eiffel et les beaux quartiers de Paris.',
    price: 800,
    rating: 5,
    flightDuration: '2h 30min',
    airline: 'Tunisair',
    bestSeason: 'Printemps',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800'
  },
  {
    id: Math.random(),
    title: 'Bali',
    country: 'Indonésie',
    description: 'Profitez des plages, des temples et de la nature tropicale.',
    price: 950,
    rating: 4,
    flightDuration: '15h 30min',
    airline: 'Qatar Airways',
    bestSeason: 'Été',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800'
  },
  {
    id: Math.random(),
    title: 'Santorin',
    country: 'Grèce',
    description: 'Admirez les maisons blanches et la mer Méditerranée.',
    price: 1200,
    rating: 5,
    flightDuration: '2h 10min',
    airline: 'Aegean Airlines',
    bestSeason: 'Été',
    image:
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800'
  },
  {
    id: Math.random(),
    title: 'Djerba',
    country: 'Tunisie',
    description: 'Découvrez les plages tunisiennes et la culture locale.',
    price: 450,
    rating: 4,
    flightDuration: '1h',
    airline: 'Tunisair',
    bestSeason: 'Printemps',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800'
  },
  {
    id: Math.random(),
    title: 'Rome',
    country: 'Italie',
    description: 'Explorez le Colisée et les monuments historiques.',
    price: 700,
    rating: 3,
    flightDuration: '1h 40min',
    airline: 'ITA Airways',
    bestSeason: 'Printemps',
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800'
  },
  {
    id: Math.random(),
    title: 'Maldives',
    country: 'Maldives',
    description: 'Détendez-vous sur des plages de sable blanc.',
    price: 1800,
    rating: 5,
    flightDuration: '12h',
    airline: 'Qatar Airways',
    bestSeason: 'Hiver',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800'
  }
];

function App() {
  const [destinations, setDestinations] = useState(initialDestinations);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/destinations"
            element={
              <Destinations
                destinations={destinations}
                setDestinations={setDestinations}
              />
            }
          />

          <Route
            path="/destinations/:id"
            element={<DestinationDetails destinations={destinations} />}
          />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <Container className="py-5 text-center">
                <h2>404 - Page introuvable</h2>
                <Button as={Link} to="/" className="mt-3">
                  Retour à l'accueil
                </Button>
              </Container>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer">
        <Container>
          <p>© {new Date().getFullYear()} Travel Destinations · Votre prochain voyage commence ici.</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
