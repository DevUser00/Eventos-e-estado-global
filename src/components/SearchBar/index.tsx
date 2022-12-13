import { useState } from 'react';
import './style.css';

type Props = {
   onSearch: Function;
}

export default function SearchBar({onSearch}: Props) {

   const [text, setText] = useState("");

   function handleSubmit(event: any) {
      event.preventDefault();
      onSearch(text);
   }

   function handleChange(event: any) {
      setText(event.target.value)
   }

   function handleResetClick() {
      setText("")
      onSearch(text)
   }

   return (
      <form className="dsc-search-bar" onSubmit={handleSubmit}>
         <button type="submit">🔎︎</button>

         <input value={text} onChange={handleChange}
         type="text" placeholder="Nome do produto" />
         
         <button onClick={handleResetClick}>🗙</button>
      </form>
   );
}