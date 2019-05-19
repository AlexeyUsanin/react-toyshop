import React from 'react';
import { Tabs, Tab } from '../../components/tabs';
import { UserList, users } from '../../components/users';
import { Gallery } from '../../components/gallery';
import { TabTask } from '../../components/taskList';
import { Product } from '../../components/product';
import './main.scss';


export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      index: 0
    };
    this.getUsers();
    this.changeTab();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  changeTab() {
    setTimeout(() => {
      this.setState({ index: 1});
    }, 3000);
  }

  render() {
    const { users, index } = this.state;

    return (
      <main className="main">
        <div className="main-content">
          <Tabs selectedIndex={index}>
            <Tab title="Show user list">
              <UserList list={users} />
            </Tab>
            <Tab title="Show gallery">
              <Gallery />
            </Tab>
          </Tabs>
          <TabTask />
          <Product />
        </div>
      </main>
    );
  }
}
