import './index.scss'
import { Component } from 'react'
import CargoWhite from '../../assets/images/cargowhite.jpg'
import TotalItems from './TotalItems'
import Items from './Items'
import GraphQty from './GraphQty'

import Loader from 'react-loaders'
import Fabrics from '../../assets/data/fabrics.json'

class Calculator extends Component {
  state = {
    freight: 0,
    localDelivery: 0,
    items: [
      {
        id: 1,
        name: Fabrics.fabrics[0].name,
        gsm: Fabrics.fabrics[0].gsm,
        width: Fabrics.fabrics[0].width,
        quantity: 0,
        price: 0,
        selfcost: 0,
      },
      {
        id: 2,
        name: Fabrics.fabrics[0].name,
        gsm: Fabrics.fabrics[0].gsm,
        width: Fabrics.fabrics[0].width,
        quantity: 0,
        price: 0,
        selfcost: 0,
      },
      {
        id: 3,
        name: Fabrics.fabrics[0].name,
        gsm: Fabrics.fabrics[0].gsm,
        width: Fabrics.fabrics[0].width,
        quantity: 0,
        price: 0,
        selfcost: 0,
      },
    ],
  }

  handleAdd = () => {
    if (this.state.items.length < 7) {
      const items = [...this.state.items]
      const index = this.state.items.length + 2
      items.push({
        id: index,
        name: Fabrics.fabrics[0].name,
        gsm: Fabrics.fabrics[0].gsm,
        width: Fabrics.fabrics[0].width,
        quantity: 0,
        price: 0,
        selfcost: 0,
      })
      this.setState({ items })
    }
  }

  changeQty = (item, qty) => {
    const items = [...this.state.items]
    const index = items.indexOf(item)
    items[index] = { ...item }
    items[index].quantity = qty
    this.setState({ items })
  }

  changePrice = (item, price) => {
    const items = [...this.state.items]
    const index = items.indexOf(item)
    items[index] = { ...item }
    items[index].price = price
    this.setState({ items })
  }

  changeName = (item, itemName) => {
    const items = [...this.state.items]
    const index = items.indexOf(item)
    items[index] = { ...item }
    items[index].name = itemName
    let fabric = Fabrics.fabrics.find((fabric) => fabric.name === itemName)
    items[index].gsm = fabric.gsm
    items[index].width = fabric.width
    this.setState({ items })
  }

  changeDelivery = (deliveryCost) => {
    this.setState({ freight: deliveryCost })
  }

  changeLocalDelivery = (deliveryCost) => {
    this.setState({ localDelivery: deliveryCost })
  }

  handleDelete = (counterId) => {
    const items = this.state.items.filter((c) => c.id !== counterId)
    this.setState({ items })
  }

  handleSelfCost = (item) => {}
  render() {
    return (
      <>
        <div className="container calculator-page">
          <div className="text-zone">
            <h1>Container calculator</h1>
            <TotalItems
              total={this.state.items.filter((c) => c.quantity > 0).length}
              totalItems={this.state.items}
              onAdd={this.handleAdd}
            />
            <Items
              freight={this.state.freight}
              items={this.state.items}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              onChangeQty={this.changeQty}
              onChangePrice={this.changePrice}
              onChangeName={this.changeName}
              onChangeDelivery={this.changeDelivery}
              onChangeLocalDelivery={this.changeLocalDelivery}
            />
          </div>
        </div>
        <div className="cont-wrap">
          <img id="cargo" src={CargoWhite} alt="cargo" />
          <div className="graph-wrap">
            <GraphQty
              items={this.state.items}
              freight={this.state.freight}
              localDelivery={this.state.localDelivery}
            />
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
  }
}

export default Calculator
