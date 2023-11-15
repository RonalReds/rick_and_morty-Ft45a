import { Link } from "react-router-dom";

export default function Card(props) {
  
   return (
      <div>
            <button onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 style={{color: 'blue'}}>{props.name}</h2>
         </Link>
            <h2 style={{color: 'black'}}>Status: {props.status}</h2>
            <h2 style={{color: 'black'}}>id: {props.id}</h2>
            <h2 style={{color: 'black'}}>Specie: {props.species}</h2>
            <h2 style={{color: 'black'}}>Gender: {props.gender}</h2>
            <h2 style={{color: 'black'}}>Origin: {props.origin}</h2>
            <img src={props.image} alt={props.name} style={{borderRadius: '9999rem'}}/>
      </div>
   );
}
