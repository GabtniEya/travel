
import { FaStar } from 'react-icons/fa';

function RatingStars({ rating }) {
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));

  return (
    <div
      className="rating-stars"
      role="img"
      aria-label={`Note : ${safeRating} sur 5 étoiles`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={star <= safeRating ? 'rating-star is-filled' : 'rating-star'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default RatingStars;
