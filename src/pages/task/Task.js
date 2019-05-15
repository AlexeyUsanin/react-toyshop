export class TaskList extends Component {
  state = {
    all: 0,
    done: 0,
    progress: 0,
    waiting: 0
  };

  addTask = () => {
    const { all } = this.state;

    this.setState({
      all: all + 1
    });
  }

  render() {
    const {
      all, done, progress, waiting
    } = this.state;

    const { name } = this.props;

    return (
      <div>
        <div className="title">
          Hello
          {name && `, ${name}`}
           !
        </div>
        <ul className="task-list">
          <li>
          You have
            <strong>{all}</strong>
            {' '}
           tasks
          </li>
          <li>
Done:
            <strong>{done}</strong>
          </li>
          <li>
In progress:
            <strong>{progress}</strong>
          </li>
          <li>
Waiting:
            <strong>{waiting}</strong>
          </li>
        </ul>
        <button
          type="button"
          onClick={this.addTask}
        >
Add Task
        </button>
        <a href="/tasklist">Go to the task list</a>
      </div>
    );
  }
}
