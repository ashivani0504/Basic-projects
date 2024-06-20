import { useEffect } from "react";
import { getUsers } from "./helpers/getUserDetail";
import { addNum, divideNum, multiplyNum, subNum } from "./helpers/operations";

function App() {
  async function getUserHelper() {
    let data = getUsers();
    console.log(data);
  }

  function operationsHelper() {
    let add = addNum(2, 5);
    let sub = subNum(10, 5);
    let multiply = multiplyNum(8, 2);
    let divide = divideNum(14, 2);

    console.log("addition ", add);
    console.log("suntraction ", sub);
    console.log("multiplication", multiply);
    console.log("division ", divide);
  }
  useEffect(() => {
    getUserHelper();
  });
  return (
    <div>
      <h1>HELPER FUNCTION</h1>
      <button onClick={operationsHelper}> calculate</button>{" "}
      <p> outputs in console.log</p>
    </div>
  );
}

export default App;
