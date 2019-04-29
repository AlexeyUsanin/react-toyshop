import './main.scss';
import { Counter } from '../counter';

const Aside = () => (
  <aside className="aside">
    <h4>Aside</h4>
  </aside>
);

export class Main extends Component {
  render() {
    return (
      <main className="main">
        <Aside />
        <div className="main-content">
          <h4>Content</h4>
          <Counter />
        </div>
      </main>
    );
  }
}
