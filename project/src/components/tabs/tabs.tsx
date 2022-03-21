import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<object>

function Tabs({ children }: Props): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {children}
      </ul>
    </nav>
  );
}

export { Tabs };
