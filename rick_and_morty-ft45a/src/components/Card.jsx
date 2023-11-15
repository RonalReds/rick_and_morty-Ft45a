import { Link } from "react-router-dom";

export default function Card(props) {
  
   return (
      <div>
            <button onClick={() => props.onClose(props.id)}>X</button>
            <h2></h2>
            <h2>Status: {props.status}</h2>
            <h2>id: {props.id}</h2>
            <h2>Specie: {props.species}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Origin: {props.origin}</h2>
            <img src={props.image} alt={props.name} />
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
      </div>
   );
}
