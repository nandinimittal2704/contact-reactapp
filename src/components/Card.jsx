import React, { useState } from "react"; // Corrected React import

function Card(props) {
  const [isFavourite, setIsFavourite] = useState(false);

  function toggleFunction() {
    setIsFavourite(!isFavourite);
  }
  // Changed "prop" to "props"
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>{" "}
          {/* Corrected "prop" to "props" */}
          <img
            className="circle-img"
            src={props.img}
            alt="Profile" // Added missing alt attribute
          />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
          <button onClick={toggleFunction}>
            {isFavourite ? " wishlist❤️" : " 🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
