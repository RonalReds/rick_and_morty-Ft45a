import { useState } from "react";
import style from "./SearchBar.module.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";


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
         <button onClick={handleClick} ><AiOutlineUserAdd size='1.5rem'/></button>
         <input type='tex' onChange={handleChange} value={id} placeholder="Enter ID" className={style.contenedorBtn1}/>
         <button onClick={handleRandom}><FaRandom size='1.5rem'/></button>
      </div>
   );
}
