import { SyntheticEvent } from 'react';
import clsx from 'clsx';

type Props = {
  title: string;
  isActive: boolean;
  onChange: (value: string) => void;
}

function Tab({ title, isActive, onChange }: Props): JSX.Element {
  const handleTabClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    onChange(title);
  };

  return (
    <li key={title} className={clsx('film-nav__item', isActive && 'film-nav__item--active')}>
      <a href="/#" onClick={handleTabClick} className="film-nav__link">{title}</a>
    </li>
  );
}

export { Tab };
