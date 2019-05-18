import React from 'react';
import { Numbers } from '../../components/numbers/Numbers';
import { UserList, users } from '../../components/users/Users';
import { Counter } from '../../components/counter/Counter';
import { Button } from '../../components/button/Button';
import { ToggleContent } from '../../components/button/ToggleButton';
import { TaskList } from '../task/Task';
import { Form } from '../../components/form/Form';
import {Tabs, Tab} from '../../components/tabs';

import './main.scss';

const tabs = [
  {id: 0, title: 'Tab 1', content: 'Some text is here'},
  {id: 1, title: 'Tab 2', content: 'Another content'},
  {id: 2, title: 'Tab 1', content: 'Third text'}
];

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      count: 0
    };
  }

  // getUsers() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ users }));
  // }

  // getPost = (id) => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  //     .then(resp => resp.json())
  //     .then(posts => this.setState({ posts }));
  // }

  render() {
    const { users, posts, count } = this.state;

    return (
      <main className="main">
        <div className="main-content">
        </div>
      </main>
    );
  }
}
