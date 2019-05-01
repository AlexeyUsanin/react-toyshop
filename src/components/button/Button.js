import './button.scss';

export class Button extends Component {
  state = {
    active: false
  }

  toggleClass = () => {
    const { active } = this.state;

    this.setState({
      active: !active
    });
  }

  render() {
    const { active } = this.state;

    return (
      <button
        type="button"
        className={`btn ${active ? 'active' : ''}`}
        onClick={this.toggleClass}
      >
Toggle
      </button>
    );
  }
}
