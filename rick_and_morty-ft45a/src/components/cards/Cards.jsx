import Card from '../card/Card';

export default function Cards({characters, onClose}) {
   
   return (
      <div style={{backgroundColor: 'teal', width: '400px', borderRadius: '1rem'}}>
         {
            
            !characters.length
               ? <h2>Ingrese un id...</h2>
               :
            characters.map(character => (
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
            />
        ))}
      </div>
   );
}
