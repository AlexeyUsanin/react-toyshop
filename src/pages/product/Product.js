import { server } from '../../services';
import { EditableField } from '../../components/editableInput';
import './product.scss';

export class Product extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    server.get(`public/products/${this.props.match.params.id}`)
      .then((product) => {
        this.setState({ product });
      });
  }

  render() {
    const { product } = this.state;

    return (

      <div className="container">
        <div className="product-info">
          <div className="wrapper">
            <span className="title">Title: </span>
            <EditableField
              input
              name={product.title}
              placeholder="Enter name"
              type="text"
            />
          </div>
          <div className="wrapper">
            <span className="title">
              Price: $
            </span>
            <EditableField
              input
              name={product.price}
              placeholder="Enter name"
              type="text"
            />
          </div>
          <div className="wrapper textarea">
            <span className="title">Description:</span>
            <EditableField
              input
              name={product.description}
              placeholder="Enter name"
              type="text"
            />
          </div>
          <input type="submit" value="Save" className="save-btn" />
        </div>
      </div>

    );
  }
}
