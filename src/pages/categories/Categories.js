import { Link } from 'react-router-dom';
import './categories.scss';

export class Categories extends Component {
  state = {
    info: {}
  };

  componentDidMount() {
    fetch('http://localhost:8086/shop_info', {
      credentials: 'include',
    })
      .then(r => r.json())
      .then((info) => {
        this.setState({ info });
      });
  }

  render() {
    const { info } = this.state;
    const { user = {} } = this.props;

    return (
      <div className="container">
        <div className="categories-info">
          <p>
            Hello,
            <strong>{user.firstName}</strong>
          </p>
          <p>
            You have
            <strong>{info.categories}</strong>
            categories (
            <strong>{info.publishedCategories}</strong>
            published)
          </p>
          <p>
            You have
            <strong>{info.products}</strong>
            products
          </p>
          <Link to="/categories">Go to categories</Link>
        </div>
      </div>
    );
  }
}
