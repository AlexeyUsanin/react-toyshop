import { Link } from 'react-router-dom';
import { EditableField } from '../editableInput';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import './product.scss';


export class Products extends Component {
  state = {
    product: [],
    value: ''
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    fetch('http://localhost:8086/public/products', {
      credentials: 'include',
    })
      .then(resp => resp.json())
      .then((prod) => {
        this.originProduct = prod;
        this.setState({product: this.originProduct});
      });
  }

  setFilterProduct = ({target}) => {
    this.setState({ value: target.value });
    this.setState({ product: this.originProduct.filter(item => 
      item.title.toLocaleLowerCase().includes(target.value)) 
    });
  }

  render() {
    const { product, value } = this.state;

    return (
      <>
        <div className="container">
          <h1>Product</h1>
          <input
            type="text"
            value={value}
            onChange={this.setFilterProduct}
            placeholder="Filter product..."
          />
          <ul className="product-list">
            {product.map(({id, image, title}) => <li key={id}>
              <div className="product-card">
                <div className="product-box">
                <div className="controls">
                  <span className="edit"><FontAwesomeIcon icon={faEdit} border /></span>
                  <span className="delete"><FontAwesomeIcon icon={faTrash} border /></span>
                </div>
                <Link to={`/products/${id}`} >
                  {image ? <img src={image} /> : <img src='../../images/default-img.png' />}
                </Link>
                </div>
                <EditableField 
                  input
                  name={title}
                  placeholder="Enter name"
                  type="text"
                />
              </div>
            </li>
            )}
          </ul>
        </div>
        </>
    )
  }
}