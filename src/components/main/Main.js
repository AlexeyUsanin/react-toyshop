import React from 'react';
import { Numbers } from '../numbers/Numbers';
import { UserList, users } from '../users/Users';
import { Counter } from '../counter/Counter';
import { Button } from '../button/Button';
import { ToggleContent } from '../button/ToggleButton';
import { TaskList } from '../task/Task';
import './main.scss';

const Aside = () => (
  <aside className="aside">
    <h3>Aside</h3>
    <TaskList
      name="Alexey"
    />
  </aside>
);

export class Main extends Component {
  render() {
    return (
      <main className="main">
        <Aside />
        <div className="main-content">
          <h2>Content</h2>
          <Numbers
            from={2}
            to={19}
            even
          />
          <UserList list={users} name="name" lastName="lastName" age="age" />
          <Counter />
          <Button />
          <ToggleContent />
        </div>
      </main>
    );
  }
}
