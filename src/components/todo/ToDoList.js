import './todo.scss';

export class ToDoList extends Component {
  state = {
    todos: []
  }
  
  constructor(props) {
    super(props);
    this.getToDo();
  }


  getToDo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(response => response.slice(0, 15))
      .then(todos => this.setState({ todos }));
  }

  render() {
    const {todos} = this.state;

    return (
      <div className="to-do-list">
        <p className="title">To Do List</p>
        <ul>
          {
            todos.map(({title, id, completed}) => (<li 
              className={completed ? 'completed' : 'uncompleted'} 
              key={id}>{id}{' '}{title}<span>X</span><span>V</span><span>~</span></li>))
          }
        </ul>
      </div>
    )
  }
}
