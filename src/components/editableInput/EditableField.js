import './input.scss';

export class EditableField extends Component {
  state = {
    hidden: true,
    value: this.props.name || ''
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
    this.props.callback(event.target.value);
  }

  render() {
    const { hidden, value } = this.state;
    const { placeholder, type, input } = this.props;

    return (
      <div className="editable-input">
        {
          input ? 
          (hidden ? (<span onClick={this.toggleInput}>{value}</span>) : (
            <input
              type={type === "text" ? "text" : "number"}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              value={value}
              autoFocus
              placeholder={placeholder}
            />
          )) : (hidden ? (<span onClick={this.toggleInput}>{value}</span>) : (
            <textarea
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              value={value}
              autoFocus
              placeholder={placeholder}
            />
          ))
        }
      </div>
    );
  }
}
