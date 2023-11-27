export default function ListTable(props) {
  const handleClick = (event) => {
    event.preventDefault();
    props.onTableSelect(props.tableNumber);
  };

  return (
    <li className="list-table">
      <a href={props.url} style={{ backgroundImage: `url(${props.imageUrl})` }} onClick={handleClick}>
        <div className="table-info">
          <p>Table</p>
          <p className='tableNumber'>{props.tableNumber}</p>
          <p>{props.tableStatus}</p>
        </div>
      </a>

    </li>

  );
}