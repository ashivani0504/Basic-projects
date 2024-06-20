import { useState, useEffect } from "react";

export default function HigherOrder() {
  return function HOC() {
    const [data, setData] = useState([]);

    useEffect(function () {
      fetch("https://jsonplaceholder.typicode.com/data")
        .then((res) => res.json())
        .then((post) => setData(post))
        .catch((error) => console.error(error));
    }, []);
  };
}
