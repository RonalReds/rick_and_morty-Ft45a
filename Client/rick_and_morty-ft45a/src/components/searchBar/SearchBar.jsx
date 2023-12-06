import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      const value = event.target.value
      setId(value)
   }

   const handleClick = (event) => {
      event.preventDefault();
      onSearch(id);
      setId('');
   }

   const handleRandom = () => {
      const randomNumber = Math.floor(Math.random() * 826) + 1;
      onSearch(randomNumber)
   }
   return (
      <div className={style.contenedorInput}>
         <input type='tex' onChange={handleChange} value={id}/>
         <button onClick={handleClick}>Agregar</button>
         <button onClick={handleRandom}>Random</button>
      </div>
   );
}
