export class ToggleContent extends Component {
  state = {
    opened: false
  }

  toggleContent = () => {
    const { opened } = this.state;

    this.setState({
      opened: !opened
    });
  }

  render() {
    const { opened } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={this.toggleContent}
        >
          {opened ? 'Hide' : 'Show'}
        </button>
        <p style={{ display: opened ? 'block' : 'none' }}>Here should be content</p>
      </div>
    );
  }
}
