import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className="input"
        type="text" color="white"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="css-button-rounded--sky" type="submit" value="Agregar" />
    </form>
  );
}

