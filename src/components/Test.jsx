import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("Yellow")}>
        Yellow
      </button>
      <button type="button" onClick={() => setColor("White")}>
        White
      </button>
      <button type="button" onClick={() => setColor("Green")}>
        Green
      </button>
    </>
  );
}

export default FavoriteColor;
