export default function ListMenu(props) {
  const handleClick = (event) => {
    event.preventDefault();
    // props.onTableSelect(props.tableNumber);
  };

  return (
    <li className="list-menu">
      <a href={props.url} onClick={handleClick}>
        <div className="menu-image">
          <img src={props.imageUrl} id={props.id} style={props.style} onClick={handleClick}/>
        </div>
        <div className="menu-info">
          <span className="menuItem">{props.menuItem} ${props.price}</span>
        </div>
      </a>
    </li>
  );
}
