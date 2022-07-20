import './index.scss'
import { Component } from 'react'
import Loader from 'react-loaders'
import Mills from '../../assets/data/factories.json'
import SearchResult from './SearchResult'
import MapResult from './MapResult'

class Suppliers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultName: Mills.factories[0]['name'],
      resultProducts: Mills.factories[0]['products'],
      resultManager: Mills.factories[0]['manager'],
      resultEmail: Mills.factories[0]['email'],
      resultCenter: Mills.factories[0]['position'],
    }
  }

  getResult = (e) => {
    //e.preventDefault()

    let mill = document.getElementById('factories').value
    let name, products, manager, email, center
    Mills.factories.forEach((item) => {
      if (mill === item['name']) {
        name = item['name']
        products = item['products']
        manager = item['manager']
        email = item['email']
        center = item['position']
        this.setState({
          resultName: name,
          resultProducts: products,
          resultManager: manager,
          resultEmail: email,
          resultCenter: center,
        })
      }
    })
  }

  render() {
    return (
      <>
        <div className="container suppliers-page">
          <div className="text-zone">
            <h1>Suppliers and Factories</h1>
            <div className="contact-form">
              <form>
                <select id="factories" onChange={this.getResult}>
                  {Mills.factories.map((item, i) => {
                    return (
                      <option key={i} value={item['name']}>
                        {item['name']}
                      </option>
                    )
                  })}
                </select>
              </form>
              <div className="search-result">
                <SearchResult
                  name={this.state.resultName}
                  products={this.state.resultProducts}
                  manager={this.state.resultManager}
                  email={this.state.resultEmail}
                />
              </div>
            </div>
          </div>
          <div className="map-wrap">
            <MapResult center={this.state.resultCenter} />
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
  }
}

export default Suppliers
