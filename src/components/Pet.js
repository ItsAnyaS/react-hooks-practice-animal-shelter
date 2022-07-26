import React from "react";

function Pet({pet}) {

   const onAdoptPet = (pet) => {
     if (pet.isAdopted === true) {
       return;
     } else {
       setIsAdopted(true);
     }
   };

     const [isAdopted, setIsAdopted] = React.useState(false);
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {pet.gender === "female" ? "♀" : "♂"}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age} years old</p>
          <p>Weight: {pet.weight}lbs</p>
        </div>
      </div>
      <div className="extra content">
        <button
          className={isAdopted ? "ui primary button" : "ui disabled button"}
        >
          Already adopted
        </button>
        <button
          className={isAdopted ? "ui disabled button" : "ui primary button"}
          onClick={() => {onAdoptPet(true)}}
        >
          Adopt pet
        </button>
      </div>
    </div>
  );
}

export default Pet;
