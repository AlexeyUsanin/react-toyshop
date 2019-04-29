import React from 'react';
import { Numbers } from '../numbers/Numbers';
import { UserList, users } from '../users/Users';
import './main.scss';
import { Counter } from '../counter';

const Aside = () => (
  <aside className="aside">
    <h3>Aside</h3>
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
        </div>
      </main>
    );
  }
}
