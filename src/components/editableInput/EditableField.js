import './input.scss';

export class EditableField extends Component {
  state = {
    hidden: true,
    value: this.props.name
  };

  componentDidUpdate(prevProp) {
    const { name } = this.props;

    if (prevProp.name !== name) {
      this.setState({value: name});
    }
  }
  
  toggleInput = () => {
    this.setState({ hidden: false });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleBlur = () => {
    this.setState({
      hidden: true,
      value: event.target.value
    });

    this.props.callback ? this.props.callback(event.target.value) : null;
  };

  render() {
    const { hidden, value } = this.state;
    const { placeholder, type, input} = this.props;

    return (
      <div className="editable-input">
        {
          input
            ? (hidden ? (<span onClick={this.toggleInput}>{value}</span>) : (
              <input
                type={type === 'text' ? 'text' : 'number'}
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
