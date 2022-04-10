import { Tab as TabItem } from './tab';

type Tab = {
  title: string;
}

type Props = {
  tabs: Tab[];
  active: string;
  onChange: (s: string) => void;
}

function Tabs({ tabs, onChange, active }: Props): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {
          tabs.map(({ title }) => (
            <TabItem key={title} title={title} isActive={active === title} onChange={onChange} />
          ))
        }
      </ul>
    </nav>
  );
}

export { Tabs };
