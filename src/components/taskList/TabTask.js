import { Tabs, Tab } from '../tabs';
import { days } from './tasks';
import './tab-task.scss';

export class TabTask extends Component {
  state = {
    selectIndex: 0
  };

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
    const { list } = this.props;

    return (
      <div className="task-list">
      <Tabs selectedIndex={selectIndex}>
        {list.map((day, index) => 
        (<Tab key={index} title={days[index]}>
          <div className="tab-content to-do-list">
            <ul>
              {
                day.map(({ title, id, done }) => (
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
        </Tab>)
        )}
      </Tabs>
      </div>
    )
  }
} 