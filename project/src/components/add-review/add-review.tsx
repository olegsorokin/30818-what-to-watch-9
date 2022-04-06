import { useState, FormEvent, Fragment, ChangeEvent, useEffect } from 'react';
import { generatePath, Link, useParams } from 'react-router-dom';

import { Logo } from '../logo/logo';
import { AppRoute } from '../../constants/routs';
import { UserBlock } from '../user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm, sendComment } from '../../store/api-actions';
import { LoadingScreen } from '../loading-screen/loading-screen';

const DEFAULT_RATING = 5;
const STARS_COUNT = 10;
const STARS_ARRAY = new Array(STARS_COUNT).fill(0).map((_, index) => String(STARS_COUNT - index));

function AddReview(): JSX.Element {
  const { id: filmId } = useParams();
  const dispatch = useAppDispatch();

  const { film } = useAppSelector((state) => state);

  const [formData, setFormData] = useState({
    rating: String(DEFAULT_RATING),
    reviewText: '',
  });

  useEffect(() => {
    if (filmId) {
      dispatch(fetchFilm({ filmId }));
    }
  }, [filmId]);

  if (!film.data) {
    return (
      <LoadingScreen />
    );
  }

  const { name, posterImage, backgroundImage } = film.data;

  const onSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (filmId) {
      dispatch(sendComment({
        filmId,
        comment: formData.reviewText,
        rating: parseInt(formData.rating, 10),
      }));
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    const { name: title, value } = event.currentTarget;
    setFormData({
      ...formData,
      [title]: value,
    });
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={generatePath(AppRoute.Film, { id: String(filmId) })} className="breadcrumbs__link">
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={generatePath(AppRoute.AddReview, { id: String(filmId) })} className="breadcrumbs__link">
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={posterImage}
            alt={`${name} poster`}
          />
        </div>
      </div>

      <div className="add-review">
        <form onSubmit={onSubmit} className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {
                STARS_ARRAY.map((item) => (
                  <Fragment key={`star-${item}`}>
                    <input
                      className="rating__input"
                      id={`star-${item}`}
                      type="radio"
                      name="rating"
                      value={item}
                      checked={item === formData.rating}
                      onChange={onChange}
                    />
                    <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
                  </Fragment>
                ))
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="reviewText"
              id="reviewText"
              placeholder="Review text"
              value={formData.reviewText}
              onChange={onChange}
              required
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>

    </section>
  );
}

export { AddReview };
