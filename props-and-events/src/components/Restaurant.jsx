// Render card for each restaurant using the props passed down through restaurant container
function Restaurant(props) {

  return (
    <div className="restaurant">
      <h2>{props.name}</h2>
      <p>{props.cuisine} | {props.rating} stars</p>
      <img src={props.image} alt={props.name} />
      <p>{props.address}</p>
      <p>{props.phone}</p>
      <h4>Hours:</h4>
      <ul>
        <li>Monday: {props.hours.monday}</li>
        <li>Tuesday: {props.hours.tuesday}</li>
        <li>Wednesday: {props.hours.wednesday}</li>
        <li>Thursday: {props.hours.thursday}</li>
        <li>Friday: {props.hours.friday}</li>
        <li>Saturday: {props.hours.saturday}</li>
        <li>Sunday: {props.hours.sunday}</li>
      </ul>

      <h4>Menu: </h4>
      <ul>
        {props.menu.map((food) => (
          <li>{food.item}, ${food.price}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default Restaurant;
