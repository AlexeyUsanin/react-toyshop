import React from 'react';
import { Numbers } from '../numbers/Numbers';
import { UserList, users } from '../users/Users';
import { Counter } from '../counter/Counter';
import { Button } from '../button/Button';
import { ToggleContent } from '../button/ToggleButton';
import { TaskList } from '../task/Task';
import { Form } from '../form/Form';
import {Tabs, Tab} from '../tabs';
import './main.scss';

const tabs = [
  {id: 0, title: 'Tab 1', content: 'Some text is here'},
  {id: 1, title: 'Tab 2', content: 'Another content'},
  {id: 2, title: 'Tab 1', content: 'Third text'}
];

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
          <Tabs>
            <Tab tittle="One">
              <h2>Hey</h2>
            </Tab>

            <Tab tittle="Two">
              <h2>Hi</h2>
            </Tab>  
          </Tabs>
        </div>
      </main>
    );
  }
}
