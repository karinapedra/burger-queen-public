export default function ListTable(props) {
  return (
    <li className="list-table">
      <a href={props.url} style={{ backgroundImage: `url(${props.imageUrl})`}}>
        <div className="table-info">
          <p>Table</p>
          <p className='tableNumber'>{props.tableNumber}</p>
          <p>{props.tableStatus}</p>
        </div>
      </a>

    </li>

  )
}