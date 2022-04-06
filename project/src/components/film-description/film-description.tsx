import { Tabs } from '../tabs';
import { FilmOverview } from '../film-overview/film-overview';
import { FilmDetails } from '../film-details/film-details';
import { FilmReviews } from '../film-reviews/film-reviews';
import { useState } from 'react';
import { Film } from '../../types/film';

enum FilmTab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

const tabs = [
  { title: FilmTab.Overview },
  { title: FilmTab.Details },
  { title: FilmTab.Reviews },
];

type Props = {
  film: Film
}

function FilmDescription({ film }: Props): JSX.Element {
  const [active, setActive] = useState<string>(FilmTab.Overview);

  return (
    <div className="film-card__desc">
      <Tabs tabs={tabs} active={active} onChange={setActive} />

      {active === FilmTab.Overview && <FilmOverview film={film} />}
      {active === FilmTab.Details && <FilmDetails film={film} />}
      {active === FilmTab.Reviews && <FilmReviews />}
    </div>
  );
}

export { FilmDescription };
