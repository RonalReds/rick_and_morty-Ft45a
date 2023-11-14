export default function Card(props) {
  
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2></h2>
         <h2>Status: {props.status}</h2>
         <h2>id: {props.id}</h2>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin.name}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}
