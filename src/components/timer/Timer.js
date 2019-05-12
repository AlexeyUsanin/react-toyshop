import './timer.scss';

export class Timer extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timeUpdate();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timeUpdate() {
    this.timer = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    return (
      <div className="timer">
        <p>{this.state.date.toLocaleDateString()}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
