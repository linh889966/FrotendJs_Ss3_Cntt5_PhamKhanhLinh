import { useState } from "react";

function Execise03() {
  const [color, setColor] = useState(false);

  function handleClick() {
    setColor(!color);
    console.log(color);
    
  }

  return (
    <>
      <p className={color ? "text-danger" : ""}>Tieu de van ban</p>
      <button onClick={handleClick}>Change color</button>
    </>
  );
}

export default Execise03;