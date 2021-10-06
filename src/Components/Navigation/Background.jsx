import React from "react";

function Background() {
  return (
    <div>
      <img
        src={"/sallereu.jpeg"}
        alt="Salle de réunion"
        style={{
          display:"flex",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          objectFit: "cover",
          position: "fixed",
          zIndex: "-1",
        }}
      />
    </div>
  );
}

export default Background;
