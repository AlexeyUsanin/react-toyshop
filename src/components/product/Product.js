import { useState, useEffect } from 'react';
import { server } from '../../services';
import { EditableField } from '../editableInput';
import './product.scss';

export class Product extends Component {
  state = {
    product: null
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    server.get(`public/products/${this.props.match.params.id}`)
      .then((prod) => this.setState(prod));
  }

  render() {
    const { title, price, description} = this.state;

    return (
    <div className="container">
      <div className="product-info">
        <div className="wrapper">
          <span className="title">Title: </span>
          <EditableField 
            input
            name={title}
            placeholder="Enter name"
            type="text"
          />
        </div>
        <div className="wrapper">
          <span className="title">Price: $</span>
          <EditableField
            input
            name={price}
            placeholder="Enter price"
            type="number"
          />
        </div>
        <div className="wrapper textarea">
          <span className="title">Description:</span>
          <EditableField
            textarea
            name={description}
            placeholder="Enter text"
            type="text"
          />
        </div>
        <input type="submit" value="Save" className="save-btn"/>
        </div>
    </div>
  
    )
  }
}