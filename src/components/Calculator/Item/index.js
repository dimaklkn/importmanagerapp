import './index.scss'
import { Component } from 'react'
import Fabrics from '../../../assets/data/fabrics.json'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onQtyChange = (event) => {
    let x = parseInt(event.target.value)
    let y = isNaN(x) ? 0 : x
    this.props.onChangeQty(this.props.item, y)
  }

  onPriceChange = (event) => {
    let x = parseInt(event.target.value)
    let y = isNaN(x) ? 0 : x
    this.props.onChangePrice(this.props.item, y)
  }

  onNameChange = (event) => {
    this.props.onChangeName(this.props.item, event.target.value)
  }
  render() {
    return (
      <li>
        <select id="fabricInput" onChange={this.onNameChange}>
          {Fabrics.fabrics.map((item, i) => {
            return (
              <option key={i} value={item['name']}>
                {item['name']}
              </option>
            )
          })}
        </select>
        <input
          id="quantityInput"
          type="number"
          placeholder="Quantity"
          onChange={this.onQtyChange}
        />
        <input
          id="price-input"
          type="number"
          placeholder="price, USD"
          onChange={this.onPriceChange}
        />
        <button
          id="delete-button"
          onClick={() => {
            this.props.onDelete(this.props.item.id)
          }}
        >
          DELETE
        </button>
      </li>
    )
  }
}

export default Item
