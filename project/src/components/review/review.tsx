import { Review as ReviewType } from '../../types/review';

type Props = {
  review: ReviewType
}

function Review({ review }: Props): JSX.Element {
  const { text, rating, details: { author, date } } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {text}
        </p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={date}>December 24, 2016</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export { Review };
