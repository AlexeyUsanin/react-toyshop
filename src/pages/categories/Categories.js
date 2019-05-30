import './categories.scss';
import {getCategoryInfo} from '../../services/categoriesServise';

export class Categories extends Component {
  state = {
    info: {}
  };

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    getCategoryInfo()
      .then((info) => {
        this.setState({info});
      });
  }
  


  render() {
    const {
      name, categories, publish, products
    } = this.props;
    const { info } = this.state;


    return (
      <div className="categories-info">
        <p>
          Hello,
          <strong>{info.name}</strong>
        </p>
        <p>
          You have
          <strong>{info.categories}</strong>
          categories (
          <strong>{info.publish}</strong>
          published)
        </p>
        <p>
          You have
          <strong>{info.products}</strong>
          products
        </p>
        <a href="/categories">Go to categories</a>
      </div>
    );
  }
}
