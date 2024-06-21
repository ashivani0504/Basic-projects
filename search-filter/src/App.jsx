import { useState } from "react";
import { useEffect } from "react";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([]);
  function getData() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }
  useEffect(function () {
    getData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const searched = setTimeout(() => {
        setSearched(
          users.filter((user) => {
            return Object.values(user)
              .join("")
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
        );
      }, 1000);
      return () => clearTimeout(searched);
    } else {
      setUsers(users);
    }
  }, [searchQuery, users]);
  return (
    <div className="container">
      <h1>SEARCH THE USER</h1>
      <input
        className="search"
        type="text"
        placeholder="Enter the user"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid-main">
        {searchQuery.length > 0
          ? searched.map((search) => {
              return (
                <div key={search.id} className="grid-child">
                  <h3>{search.name}</h3>
                  <p>{search.username}</p>
                </div>
              );
            })
          : users.map((user) => (
              <div key={user.id} className="grid-child">
                <h3>{user.name}</h3>
                <p>{user.username}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;
