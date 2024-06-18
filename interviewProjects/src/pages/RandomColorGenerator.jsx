import { useState } from "react";
import "../styles/randomColorGenerator.css";

function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function utility(length) {
    return Math.floor(Math.random() * length);
  }
  function hexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[utility(hex.length)];

      setColor(hexColor);
    }
  }
  function rgbColor() {
    const r = utility(256);
    const g = utility(256);
    const b = utility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  return (
    <div
      className="rcg"
      style={{
        background: color,
        width: "100wv",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>CREATE RANDOM COLOR</h1>
      <button onClick={typeOfColor === "hex" ? hexColor : rgbColor}>
        Create Random Color
      </button>
      <button onClick={() => setTypeOfColor("hex")}>HEX</button>
      <button onClick={() => setTypeOfColor("rgb")}>RGB</button>

      <div className="show">
        {" "}
        <h3> {typeOfColor === "hex" ? "HEX COLOR" : "RGB COLOR"}</h3>
        <p>{color}</p>
      </div>
    </div>
  );
}

export default RandomColorGenerator;
