export default function ListMenu(props) {
  return (
    <li className="list-menu">
      <a href={props.url}>
        <div className="menu-image">
          <img src={props.imageUrl} alt={props.alt} style={props.style} />
        </div>
        <div className="menu-info">
          <span className="menuItem">{props.menuItem}</span>
        </div>
      </a>
    </li>
  );
}
