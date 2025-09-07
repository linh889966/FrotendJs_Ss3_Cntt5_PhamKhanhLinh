import React, { useState } from "react";
import { Input } from "antd";
import "./Inputs.css";

const Inputs: React.FC = () => {
  const [large, setLarge] = useState<string>("");
  const [middle, setMiddle] = useState<string>("");
  const [small, setSmall] = useState<string>("");

  return (
    <div className="inputs-wrap">
      <Input
        size="large"
        placeholder="Input cỡ lớn"
        value={large}
        onChange={(e) => setLarge(e.target.value)}
      />
      <Input
        size="middle"
        placeholder="Input cỡ trung bình"
        value={middle}
        onChange={(e) => setMiddle(e.target.value)}
      />
      <Input
        size="small"
        placeholder="Input cỡ bé"
        value={small}
        onChange={(e) => setSmall(e.target.value)}
      />
    </div>
  );
};

export default Inputs;
