import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Review } from '../review/review';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchComments } from '../../store/api-actions';

function FilmReviews(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { comments } = useAppSelector((state) => state);

  useEffect(() => {
    if (id) {
      dispatch(fetchComments({ filmId: id }));
    }
  }, [id]);

  const reviewInCell = Math.ceil(comments.data.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          comments.data?.slice(0, reviewInCell).map((comment) => (
            <Review key={comment.id} review={comment} />
          ))
        }
      </div>
      <div className="film-card__reviews-col">
        {
          comments.data?.slice(reviewInCell).map((comment) => (
            <Review key={comment.id} review={comment} />
          ))
        }
      </div>
    </div>
  );
}

export { FilmReviews };
