import { NavTaskList, days } from "./NavTaskList";
import { tasks } from './tasks';
import './todo.scss';

export class TabTask extends Component {
  state = {
    selectIndex: 0
  }

  selectTab = (selectIndex) => {
    this.setState({selectIndex})
  }

  componentDidMount() {
    this.getCurrentDay();
  }

  getCurrentDay() {
    const curDay = new Date().getDay();
    if (curDay === 0) {
      this.setState({selectIndex: 6});
    } else {
      this.setState({selectIndex: curDay - 1});
    }
  }  

  render() {
    const { selectIndex } = this.state;

    return (
      <div className="task-list">
        <NavTaskList 
          select={this.selectTab}
          activeIndex={selectIndex}
        />
        <div className="tab-content to-do-list">
          <ul>
            {
              tasks[selectIndex].map(({ title, id, done }) => (
                <li
                  className={done ? 'completed' : 'uncompleted'}
                  key={id}
                >
                  {title}
                  {
                    !done && <>
                    <span>X</span>
                    <span>V</span>
                    <span>~</span></>
                  }
                </li>
              ))
            }
          </ul>
          <button className="add-task">Add new task</button>
        </div>
      </div>
    )
  }
} 