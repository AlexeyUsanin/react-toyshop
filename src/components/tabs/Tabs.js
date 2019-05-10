import {TabNav} from './TabNav';

export const Tab = () => null;

export class Tabs extends Component {
  state = {
    selectIndex: 0
  }

  changeTab = (selectIndex) => {
    this.setState({selectIndex})
  }

  render() {
    const { selectIndex} = this.state;
    const {children} = this.props;

    const tabs = this.props.children.filter(child => child.type === Tab);
    const currentTab = tabs[selectIndex] && tabs[selectIndex].props.children;

    const titles = children.map(el => el.props.title);

    return (
      <div>
        <TabNav 
          list={titles}
          select={this.changeTab}
          activeIndex={selectIndex}

        />
        <div>
          {currentTab}
        </div>
      </div>
    )
  }
}