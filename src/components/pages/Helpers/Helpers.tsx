import './Helpers.scss';
import BasicDateCalendar from './ui-local/Calendar/Calendar';
import CatFact from './ui-local/CatFact/CatFact';
import Compliment from './ui-local/Compliment/Compliment';
import TodoList from './ui-local/Todo/Todo';

export default function Helpers() {
  return (
    <section className="helpers">
      <div className="helpers__left helpers__column">
        <div className="helpers__widget">Прогноз погоды</div>
        <div className="helpers__widget">Колонка релевантных новостей</div>
      </div>

      <div className="helpers__center helpers__column">
        <div className="helpers__widget">
          <TodoList />
        </div>
      </div>

      <div className="helpers__right helpers__column">
        <div className="helpers__widget">
          <BasicDateCalendar />
        </div>
        <div className="helpers__widget">
          <CatFact />
        </div>
        <div className="helpers__widget">
          <Compliment />
        </div>
      </div>
    </section>
  );
}
