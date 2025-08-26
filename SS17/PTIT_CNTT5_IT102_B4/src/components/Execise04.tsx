import { useState } from "react";

function Execise04() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
    console.log(toggle);
    
  }

  return (
    <>
        <button onClick={handleClick}>Change Toggle</button>
        <p className={toggle ? "d-none" : ""}>Tieu de van ban</p>
    </>
  );
}

export default Execise04;