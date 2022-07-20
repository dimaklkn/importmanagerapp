import './index.scss'
import { Component } from 'react'
import Item from '../Item'

class Items extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onDeliveryChange = (event) => {
    let x = parseInt(event.target.value)
    let y = isNaN(x) ? 0 : x
    this.props.onChangeDelivery(y)
  }

  onLocalDeliveryChange = (event) => {
    let x = parseInt(event.target.value)
    let y = isNaN(x) ? 0 : x
    this.props.onChangeLocalDelivery(y)
  }

  render() {
    return (
      <ul>
        <li>
          <input
            className="freight"
            type="number"
            onChange={this.onDeliveryChange}
            placeholder="Freight, USD"
          />
          <input
            className="local"
            type="number"
            onChange={this.onLocalDeliveryChange}
            placeholder="Local, USD"
          />
        </li>
        {this.props.items.map((item) => (
          <Item
            key={item.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onChangeQty={this.props.onChangeQty}
            onChangePrice={this.props.onChangePrice}
            onChangeName={this.props.onChangeName}
            item={item}
          />
        ))}
      </ul>
    )
  }
}

export default Items
