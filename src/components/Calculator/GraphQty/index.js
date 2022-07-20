import './index.scss'
import CalcResult from '../CalcResult'

const CalcResults = (props) => {
  let totalInvoice = 0

  props.items.forEach((item) => {
    let invoice = item.price * item.quantity
    totalInvoice += invoice
  })
  let tax = ((totalInvoice + props.freight) * 10) / 100
  let vat = ((totalInvoice + tax) * 20) / 100

  let totalTaxes = Math.round(tax + vat)
  let totalCost = Math.round(
    props.freight + props.localDelivery + tax + vat + totalInvoice
  )

  return (
    <>
      <ul>
        <li>
          Total taxes: &#36;<span>{totalTaxes}</span>, Total cost: &#36;
          <span>{totalCost}</span>
        </li>
        {props.items.map((item) => (
          <CalcResult
            key={item.id}
            item={item}
            freight={props.freight}
            localDelivery={props.localDelivery}
            items={props.items}
          />
        ))}
      </ul>
    </>
  )
}

export default CalcResults
