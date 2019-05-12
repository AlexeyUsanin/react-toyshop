import './categories.scss';

export class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name, categories, publish, products
    } = this.props;

    return (
      <div className="categories-info">
        <p>
          Hello,
          <strong>{name}</strong>
        </p>
        <p>
          You have
          <strong>{categories}</strong>
          categories (
          <strong>{publish}</strong>
          published)
        </p>
        <p>
          You have
          <strong>{products}</strong>
          products
        </p>
        <a href="/categories">Go to categories</a>
      </div>
    );
  }
}
