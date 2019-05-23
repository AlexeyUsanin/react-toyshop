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
      .then(info => {
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
