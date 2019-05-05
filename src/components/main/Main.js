import React from 'react';
import { Numbers } from '../numbers';
import { Counter } from '../counter';
import { Button, ToggleContent } from '../button';
import { TaskList } from '../task';
import { PostList, UserList } from '../users';
import { Timer } from '../timer';
import { Mount } from '../mount';
import './main.scss';

export class Aside extends Component {
  state = {
    shown: true
  }

  render() {
    const { shown } = this.state;
    return (
      <aside className="aside">
        <h3>Aside</h3>
        <TaskList
          name="Alexey"
        />
        <button onClick={() => this.setState({ shown: !shown })}>{shown ? 'Hide Time' : 'Show Time'}</button>
        {shown && <Timer />}
      </aside>
    );
  }
}

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

    return (
      <main className="main">
        <Aside />
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
        </div>
      </main>
    );
  }
}
