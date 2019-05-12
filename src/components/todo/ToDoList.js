import './todo.scss';

export class ToDoList extends Component {
  state = {
    todos: [],
    filterVal: ''
  }

  constructor(props) {
    super(props);
    this.getToDo();
  }

  getToDo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(response => response.slice(0, 15))
      .then((todos) => {
        this.originTodos = todos;
        this.setState({ todos: this.originTodos });
      });
  }

  setFilter = ({ target }) => {
    this.setState({ filterVal: target.value });
    this.setState({ todos: this.originTodos.filter(todo => todo.title.includes(target.value)) });
  }

  render() {
    const { todos, filterVal } = this.state;

    return (
      <div className="to-do-list">
        <p className="title">To Do List</p>
        <input
          type="text"
          value={filterVal}
          onChange={this.setFilter}
          placeholder="Filter list..."
        />
        <ul>
          {
            todos.map(({ title, id, completed }) => (
              <li
                className={completed ? 'completed' : 'uncompleted'}
                key={id}
              >
                {id}
                {' '}
                {title}
                <span>X</span>
                <span>V</span>
                <span>~</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
