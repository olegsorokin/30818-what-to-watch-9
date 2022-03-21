import React from 'react';
import clsx from 'clsx';

const ACTIVE_TAB_CLASS = 'film-nav__item--active';

type Props = {
  title: string,
  isActive: boolean,
  onChange: (value: string) => void
}

function Tab({ title, isActive, onChange }: Props): JSX.Element {
  const handleClick = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    onChange(title);
  };

  return (
    <li key={title} className={clsx('film-nav__item', isActive && ACTIVE_TAB_CLASS)}>
      <a href="#" onClick={handleClick} className="film-nav__link">{title}</a>
    </li>
  );
}

export { Tab };
