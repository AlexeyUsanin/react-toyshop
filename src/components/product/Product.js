import { EditableField } from '../editableInput';
import './product.scss';

export class Product extends Component {
  render() {
    return (
      <div className="product-info">
      <div className="wrapper">
        <span className="title">Title:</span>
        <EditableField 
          input
          name="Toy"
          placeholder="Enter name"
          type="text"
          prop={console.log}
        />
      </div>
      <div className="wrapper">
        <span className="title">Price: $</span>
        <EditableField
          input
          name={167}
          placeholder="Enter price"
          type="number"
        />
      </div>
      <div className="wrapper textarea">
        <span className="title">Description:</span>
        <EditableField
          textarea
          name="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi rem quam vitae itaque ullam facilis nam harum ducimus cumque exercitationem."
          placeholder="Enter text"
          type="text"
        />
      </div>
      <input type="submit" value="Save" className="save-btn"/>
      </div>
    )
  }
}