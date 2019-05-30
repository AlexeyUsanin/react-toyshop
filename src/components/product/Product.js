import { server } from '../../services';
import { EditableField } from '../editableInput';
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
      .then(product => {
        this.setState({product});
      });
  }

  render() {
  
    const { product } = this.state;

    return (
      
      <div className="container">
      <div className="product-info">
        <div className="wrapper">
          <span className="title">Title: {product.title}</span>
        </div>
        <div className="wrapper">
          <span className="title">Price: ${product.price}</span>
        </div>
        <div className="wrapper textarea">
          <span className="title">Description:</span>
          <p>{product.description}</p>
        </div>
        <input type="submit" value="Save" className="save-btn"/>
        </div>
    </div>
  
    )
  }
}