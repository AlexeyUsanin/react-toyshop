import './tabs.scss';
import { TabNav } from './TabNav';

export const Tab = () => null;

export class Tabs extends Component {
  state = {
    selectIndex: this.props.selectedIndex ? this.props.selectedIndex : 0 
  }

  changeTab = (selectIndex) => {
    this.setState({ selectIndex });
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      this.setState({selectIndex: this.props.selectedIndex})
    }
  }
  
  render() {
    const { selectIndex } = this.state;
    const tabs = this.props.children.filter(child => child.type === Tab);

    const titles = tabs.map(el => el.props.title);
    const content = tabs.map(el => el.props.children);

    return (
      <div className="tabs">
        <TabNav
          list={titles}
          select={this.changeTab}
          activeIndex={selectIndex}
        />
        <div className="tab-content">
          {content[selectIndex]}
        </div>
      </div>
    );
  }
}
