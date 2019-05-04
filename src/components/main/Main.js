import React from 'react';
import { Numbers } from '../numbers/Numbers';
import { UserList, users } from '../users/Users';
import { Counter } from '../counter/Counter';
import { Button } from '../button/Button';
import { ToggleContent } from '../button/ToggleButton';
import { TaskList } from '../task/Task';
import { Form } from '../form/Form';
import {Tabs, Tab} from '../tabs';
// import img from './node.png';
import { Input } from '../editableInput';
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
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      count: 0
    };
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  getPost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(resp => resp.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { users, posts, count } = this.state;
    const fn = text => console.log(text);

    return (
      <main className="main">
        <div className="main-content">
          <h2>Content</h2>
          <div className="user-post">
            <UserList list={users} onClick={this.getPost} />
            <PostList posts={posts} />
          </div>
          <Counter />
          <Button />
          <ToggleContent />
          <div className="mount-wrapper">
            <button onClick={() => this.setState({ count: count + 1 })}>Inc</button>
            <Mount inc={count} />
          </div>
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
          <UserList list={users} name="name" lastName="lastName" age="age" />
          <Counter />
          <Button />
          <ToggleContent />
          <Input prop={fn}/>
        </div>
      </main>
    );
  }
}
