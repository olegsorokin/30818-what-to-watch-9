import { Review as TReview } from '../../types/review';
import { formatDate } from '../../utils/common';


type Props = {
  review: TReview
}

function Review({ review }: Props): JSX.Element {
  const { text, rating, author, date } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {text}
        </p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={date}>
            {formatDate(date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export { Review };
