import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

type Props = {
  film: Film,
  onHover: (id: number) => void
}

function FilmCard({ film, onHover }: Props): JSX.Element {
  const { id, poster, title } = film;

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => onHover(id)}>
      <div className="small-film-card__image">
        <img
          src={poster.src}
          alt={title}
          width={poster.width}
          height={poster.height}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
}

export { FilmCard };
