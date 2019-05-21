import './loader.scss';

export class Loader extends Component {
  render() {
    return (
      this.props.loader ?
      <div className="loader"></div> : null
    )
  }
}