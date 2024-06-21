import { useEffect } from "react";

function App() {
  function promiseOne(paramOne) {
    return new Promise((resolve, reject) => {
      if (paramOne === "icecream") {
        resolve("icecream accepted [ promise resolved ]");
      } else {
        reject("icecream rejected [ promise rejected ]");
      }
    });
  }

  function promiseTwo(paramTwo) {
    return new Promise((resolve, reject) => {
      if (paramTwo === "icecream accepted [ promise resolved ]") {
        resolve("icecream is good [ promise resolved ]");
      } else {
        reject("icecream is bad [ promise rejected ]");
      }
    });
  }

  //PROMISES

  function promiseMain() {
    promiseOne("icecream")
      .then((fresponse) => {
        console.log(fresponse);
        return promiseTwo(fresponse);
      })
      .then((sresponse) => {
        console.log(sresponse);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //ASYNC /AWAIT

  async function asyncMain() {
    try {
      const responseOne = await promiseOne("icecream");
      console.log(responseOne);
      const responseTwo = await promiseTwo(responseOne);
      console.log(responseTwo);
    } catch {
      console.log("icecream is rejected or not bought [ promise rejected ]");
    }
  }

  useEffect(function () {
    promiseMain();
    asyncMain();
  }, []);

  return <div> outputs in console.log</div>;
}

export default App;
