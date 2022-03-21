import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../logo/logo';
import { Film } from '../../types/film';
import { AppRoute } from '../../constants/routs';

type Props = {
  film: Film
}

const DEFAULT_RATING = 5;
const STARS_COUNT = 10;
const STARS_ARRAY = new Array(STARS_COUNT).fill(0).map((_, index) => String(STARS_COUNT - index));

function AddReview({ film }: Props): JSX.Element {
  const { title, poster: { background, src, width, height } } = film;
  const [formData, setFormData] = useState({
    rating: String(DEFAULT_RATING),
    reviewText: '',
  });

  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void {
    const { name, value } = event.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.AddReview} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={src}
            alt={`${title} poster`}
            width={width}
            height={height}
          />
        </div>
      </div>

      <div className="add-review">
        <form onSubmit={onSubmit} className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {
                STARS_ARRAY.map((item) => (
                  <React.Fragment key={`star-${item}`}>
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
                  </React.Fragment>
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
