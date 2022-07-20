import './index.scss'

const CalcResult = (props) => {
  let kgs = 0

  props.items.forEach((item) => {
    let fabricWeight = (item.gsm * item.width * item.quantity) / 100
    kgs += Math.round(fabricWeight)
  })
  let itemFreight =
    (props.freight / kgs) *
    ((props.item.gsm * props.item.width * props.item.quantity) / 100)
  let itemLocalDelivery =
    (props.localDelivery / kgs) *
    ((props.item.gsm * props.item.width * props.item.quantity) / 100)
  let invoice = props.item.quantity * props.item.price
  let tax = ((invoice + itemFreight) * 10) / 100
  let vat = ((invoice + tax) * 20) / 100
  let beforeSelfcost =
    (invoice + tax + vat + itemFreight + itemLocalDelivery) /
    props.item.quantity
  let selfcost = Math.round(beforeSelfcost * 100) / 100
  let selfcostResult = selfcost > 0 ? selfcost : '0.00'
  return (
    <li>
      {props.item.name} &#36;<span>{selfcostResult}</span>/meter
    </li>
  )
}

export default CalcResult
