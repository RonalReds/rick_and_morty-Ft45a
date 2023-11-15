import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      const value = event.target.value
      setId(value)
   }
   return (
      <div>
         <input type='tex' onChange={handleChange}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
