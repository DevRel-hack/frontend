import './Helpers.scss';
import BasicDateCalendar from './ui-local/Calendar/Calendar';
import CatFact from './ui-local/CatFact/CatFact';
import Compliment from './ui-local/Compliment/Compliment';
import TodoList from './ui-local/Todo/Todo';

export default function Helpers() {
  return (
    <section className="helpers">
      <div className="helpers__left helpers__column">
        <div className="helpers__widget">
          <h4>Прогноз погоды</h4>
          <p>Ждём у моря погоды</p>
          <p>Осторожно, возможны осадки в виде фрикаделек</p>
        </div>
        <div className="helpers__widget">
          <h4>Колонка релевантных новостей</h4>
          <p>Я новость</p>
          <p>И ты новость</p>
          <p>Вот ведь дела</p>
        </div>
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
