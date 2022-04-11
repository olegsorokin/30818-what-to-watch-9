import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Review } from '../review/review';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchComments } from '../../store/api-actions';
import { comments as commentsSelector } from '../../store/selectors';

function FilmReviews(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const comments = useAppSelector(commentsSelector);

  useEffect(() => {
    if (id) {
      dispatch(fetchComments({ filmId: id }));
    }
  }, [dispatch, id]);

  const reviewsInCol = Math.ceil(comments.items.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          comments.items.slice(0, reviewsInCol).map((comment) => (
            <Review key={comment.id} review={comment} />
          ))
        }
      </div>
      <div className="film-card__reviews-col">
        {
          comments.items.slice(reviewsInCol).map((comment) => (
            <Review key={comment.id} review={comment} />
          ))
        }
      </div>
    </div>
  );
}

export { FilmReviews };
