import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



const URL = "https://rym2.up.railway.app/api/character";
   const API_KEY = "henrystaff";

const Deatil = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL}/${id}?key=${API_KEY}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);


    return (
        <div style={{backgroundColor: 'silver', width: '500px', borderRadius: '1rem'}}>
            <h1 style={{color: 'black'}}>SOY EL DETALLE 👀</h1>
            <h2 style={{color:'black'}}>{character?.name}</h2>
            <h2 style={{color:'black'}}>{character?.status}</h2>
            <h2 style={{color:'black'}}>{character?.species}</h2>
            <h2 style={{color:'black'}}>{character?.gender}</h2>
            <h2 style={{color:'black'}}>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} style={{borderRadius: '4rem'}}/>
        </div>
    )
}


export default Deatil;