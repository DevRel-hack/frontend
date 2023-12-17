import './Sending.scss';
import SendlerForm from './ui-local/SendlerForm/SendlerForm';
import SendlerList from './ui-local/SendlerList/SendlerList';
import TablePeople from './ui-local/TablePeople/TablePeople';

export default function Sending() {
  return (
    <div className="sending">
      <aside className="sending__aside">
        <SendlerList />
      </aside>
      <div className="sending__div" />
      <section className="sending__content">
        <SendlerForm />
        <TablePeople />
      </section>
    </div>
  );
}
