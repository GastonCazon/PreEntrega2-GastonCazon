import { useState } from "react";

const Contador = () => {
  const [num, setNum] = useState(0);

  const sumar = () => {
    setNum(num + 1);
  };

  const restar = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <button onClick={restar}>-</button>
      <p>{num}</p>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Contador;
