import './People.scss';
import FiltersList from './ui-local/FiltersList/FiltersList';

export default function People() {
  return (
    <div className="people">
      <FiltersList />
      <h1>Здесь будут люди</h1>
    </div>
  );
}
