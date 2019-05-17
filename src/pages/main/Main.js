import React from 'react';
import { Tabs, Tab } from '../../components/tabs';
import { UserList, users } from '../../components/users';
import { Gallery } from '../../components/gallery';
import './main.scss';


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
        <div className="main-content">
          <Tabs selectedIndex={1}>
            <Tab title="Show user list">
              <UserList list={users} />
            </Tab>

            <Tab title="Show gallery">
              <Gallery />
            </Tab>
          </Tabs>
        </div>
      </main>
    );
  }
}
