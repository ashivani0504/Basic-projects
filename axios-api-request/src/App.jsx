import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  //POST DATA
  function postData() {
    axios.post("https://6671c1e5e083e62ee43cfc84.mockapi.io/users", {
      name: name,
      email: email,
      age: age,
    });

    setName("");
    setEmail("");
    setAge("");
  }

  //GET DATA

  function getData() {
    axios
      .get(`https://6671c1e5e083e62ee43cfc84.mockapi.io/users`)
      .then((res) => setUsers(res.data))
      .catch((error) => console.error(error));
  }
  useEffect(function () {
    getData();
  }, []);

  //PUT DATA
  function updateData(id) {
    axios
      .put(`https://6671c1e5e083e62ee43cfc84.mockapi.io/users/${id}`, {
        name: name,
        email: email,
        age: age,
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  }
  //DELETE DATA
  function DeleteData(id) {
    axios
      .delete(`https://6671c1e5e083e62ee43cfc84.mockapi.io/users/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />
      <button onClick={postData}> Post data </button>

      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => updateData(user.id)}>update</button>{" "}
              <span>
                <button onClick={() => DeleteData(user.id)}>Delete</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
