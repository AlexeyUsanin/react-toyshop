import React from 'react';
import { Numbers } from '../numbers';
import { UserList, PostList } from '../users';
import { TaskList } from '../task';
import { Form } from '../form';
import { Tabs, Tab } from '../tabs';
import { Input } from '../editableInput';
import { ToDoList } from '../todo';
import { Categories } from '../categories';
import './main.scss';

const tabs = [
  { id: 0, title: 'Tab 1', content: 'Some text is here' },
  { id: 1, title: 'Tab 2', content: 'Another content' },
  { id: 2, title: 'Tab 1', content: 'Third text' }
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
    const { users, posts, todos } = this.state;
    const fn = text => console.log(text);

    return (
      <main className="main">
        <Input prop={fn} />
        <div className="main-content">
          <ToDoList />
          <Categories
            name="John"
            categories={50}
            publish={4}
            products={14}
          />
        </div>
      </main>
    );
  }
}
