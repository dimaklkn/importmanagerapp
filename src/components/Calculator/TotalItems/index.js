import './index.scss'

const TotalItems = (props) => {
  let kgs = 0
  let totalCost = 0
  props.totalItems.forEach((item) => {
    let fabricWeight = (item.gsm * item.width * item.quantity) / 100
    let cost = item.quantity * item.price
    kgs += Math.round(fabricWeight)
    totalCost += cost
  })

  return (
    <>
      <button id="add-button" onClick={props.onAdd}>
        Add item
      </button>

      <p>
        Total: <span className="pink">{props.total}</span> Net weight: &nbsp;
        <span className="pink" id="totalkgs">
          {kgs}
        </span>{' '}
        kgs. Total Invoice:&nbsp; &#36;<span className="pink">{totalCost}</span>
      </p>
    </>
  )
}

export default TotalItems
