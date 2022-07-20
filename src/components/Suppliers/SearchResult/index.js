import './index.scss'

const SearchResult = (props) => {
  return (
    <ul>
      <li>
        <span>Company:</span> {props.name}
      </li>
      <li>
        <span>Main products:</span> {props.products}
      </li>
      <li>
        <span>Manager:</span> {props.manager}
      </li>
      <li>
        <span>E-mail:</span> {props.email}
      </li>
    </ul>
  )
}

export default SearchResult
