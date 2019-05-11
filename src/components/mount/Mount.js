import './mount.scss';

export class Mount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: undefined
    };
  }

  componentDidUpdate(prevProps) {
    const { inc } = this.props;
    
    if (inc !== prevProps.inc) {
      if (inc % 3 === 0) {
        this.setState({ color: 'green' });
      } else {
        this.setState({ color: undefined });
      }

      if (inc % 5 === 0) {
        this.setState({ color: 'blue' });
      }

      if ((inc % 3 === 0) && (inc % 5 === 0)) {
        this.setState({ color: '#0ff' });
      }
    }
  }

  render() {
    const { color } = this.state;

    return (
      <div className="mount" style={{ background: color }}>
        <span>
          Number is
          {' '}
          {this.props.inc}
        </span>
      </div>
    );
  }
}
