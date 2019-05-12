import './input.scss';

export class Input extends Component {
  state = {
    hidden: true,
    value: ''
  };

  constructor(props) {
    super(props);
  }

  toggleInput = () => {
    this.setState({ hidden: false });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleBlur = () => {
    this.setState({ hidden: true });
    this.setState({ value: event.target.value });
    this.props.prop(event.target.value);
  }

  render() {
    const { hidden, value } = this.state;

    return (
      <div className="editable-input">
        {
          hidden ? (<span onClick={this.toggleInput}>{value || 'Enter some text'}</span>) : (
            <input
              type="text"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              value={value}
              autoFocus={true}
            />
          )
        }

      </div>
    );
  }
}
