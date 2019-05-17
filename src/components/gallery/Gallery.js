import './gallery.scss';

export class Gallery extends Component {
  render() {
    return (
      <div className="img-gallery">
        <img src="images/node.png" />
        <img src="images/js.png" />
        <img src="images/react.png" />
      </div>
    );
  }
}
