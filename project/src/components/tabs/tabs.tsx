import { Tab } from './tab';

type TTab = {
  title: string,
}

type Props = {
  tabs: TTab[],
  active: string,
  onChange: (s: string) => void,
}

function Tabs({ tabs, onChange, active }: Props): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {
          tabs.map(({ title }) => (
            <Tab key={title} title={title} isActive={active === title} onChange={onChange} />
          ))
        }
      </ul>
    </nav>
  );
}

export { Tabs };
