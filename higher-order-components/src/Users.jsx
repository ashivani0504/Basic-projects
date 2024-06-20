import { useEffect } from "react";
import { useState } from "react";
import HigherOrder from "./HigherOrder";

function Users() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let users = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    setUsers(await users.json());
  }

  useEffect(function () {
    getUsers();
  }, []);
  return (
    <div>
      <h1>USERS</h1>
      {users.slice(0, 10).map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}

const usersComponent = HigherOrder("Users");
export default usersComponent;
