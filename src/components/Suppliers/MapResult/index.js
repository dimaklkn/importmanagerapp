import './index.scss'
import Mills from '../../../assets/data/factories.json'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapResult = (props) => {
  const ShowMap = () => {
    return (
      <MapContainer center={props.center} zoom={10}>
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />

        {Mills.factories.map(function (item, i) {
          return (
            <Marker key={i} position={item['position']}>
              <Popup>{item['name']}</Popup>
            </Marker>
          )
        })}
      </MapContainer>
    )
  }

  return <ShowMap />
}

export default MapResult
