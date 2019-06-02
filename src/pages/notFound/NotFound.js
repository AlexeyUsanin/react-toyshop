import './error-page.scss';

export class NotFound extends Component {
  render() {
    return (
      <div className="error-page">
        <h1 className="bounce">404</h1>
        <h2>Page not found</h2>
      </div>
    );
  }
}
