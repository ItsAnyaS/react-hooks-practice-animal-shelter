import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

useEffect(()=> {
  const onPetsClick = async () => {
    let req = await fetch(`http://localhost:3001/pets${filters.type === 'all' ? '': '?type='+filters.type}`);
    let res = await req.json();
    setPets(res);
  };
  onPetsClick()
}, [filters])

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={setFilters} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
