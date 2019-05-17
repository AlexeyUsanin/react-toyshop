import './input.scss';

export class Input extends Component {
  state = {
    hidden: true,
    value: ''
  };

  toggleInput = () => {
    this.setState({ hidden: false });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleBlur = () => {
    this.setState({
      hidden: true,
      value: event.target.value
    });
    this.props.prop(event.target.value);
  }

  render() {
    const { hidden, value } = this.state;
    const { placeholder } = this.props;

    return (
      <div className="editable-input">
        {
          hidden ? (<span onClick={this.toggleInput}>{value || placeholder}</span>) : (
            <input
              type="text"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              value={value}
              autoFocus
              placeholder={placeholder}
            />
          )
        }
      </div>
    );
  }
}
