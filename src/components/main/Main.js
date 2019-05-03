import React from 'react';
import { Numbers } from '../numbers/Numbers';
import { UserList } from '../users/Users';
import { Counter } from '../counter/Counter';
import { Button } from '../button/Button';
import { ToggleContent } from '../button/ToggleButton';
import { TaskList } from '../task/Task';
import { PostList } from '../users/Post';
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
  
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: []
    };
    this.getUsers();
    this.getPost();

  }
  
  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({users}));
  }
  
  getPost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(resp=> resp.json())
    .then(posts => this.setState({posts}));
  }
  
  render() {

    const { users, posts } = this.state;
  
    return (
      <main className="main">
        <Aside />
        <div className="main-content">
          <h2>Content</h2>
          <UserList list={users} onClick={this.getPost}/>
          <PostList posts={posts}  />
          <Counter />
          <Button />
          <ToggleContent />
        </div>
      </main>
    );
  }
}
