import { Review } from '../review/review';
import { Review as TReview } from '../../types/review';

type Props = {
  reviews: TReview[],
}

function FilmReviews({ reviews }: Props): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review} />
          ))
        }
      </div>
      <div className="film-card__reviews-col">
        {
          reviews.slice(3).map((review) => (
            <Review key={review.id} review={review} />
          ))
        }
      </div>
    </div>
  );
}

export { FilmReviews };
