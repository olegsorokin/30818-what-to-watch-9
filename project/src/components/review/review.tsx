import { Comment } from '../../types/comment';
import { formatDate } from '../../utils/common';

type Props = {
  review: Comment;
}

function Review({ review }: Props): JSX.Element {
  const { comment, rating, user, date } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
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
