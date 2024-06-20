import { useEffect, useState } from "react";

function HigherOrder(title, Component, endPoint) {
  return function HOC() {
    const [data, setData] = useState([]);

    useEffect(function () {
      fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }, []);
    return (
      <div>
        <h1>{title}</h1>
        <Component data={data} />
      </div>
    );
  };
}

export default HigherOrder;
