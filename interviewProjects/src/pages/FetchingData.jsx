import { useEffect, useState } from "react";

function FetchingData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(" error in fetching"))
      .finally(() => console.log("fetched user data"));
    setIsLoading(false);
  }, []);
  console.log(data);
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Fetching user data</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th> Email</th>
            <th>Phone</th>
            <th> City</th>
            <th> zipcode</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((users) => (
            <tr key={users.id}>
              <td>{users.name}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              <td>{users.phone}</td>
              <td>{users.address.city}</td>
              <td>{users.address.zipcode}</td>
              <td>{users.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchingData;
