import { useState, useEffect } from "react";

export default function HigherOrder(title, Component, endpoint) {
  return function HOC() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then((res) => res.json())
        .then((post) => setData(post))
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
