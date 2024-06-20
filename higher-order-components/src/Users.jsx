import HigherOrder from "./HigherOrder";
function Users({ data }) {
  return (
    <div>
      {data.slice(0, 10).map((user) => (
        <li key={user.id}> {user.name}</li>
      ))}
    </div>
  );
}

const usersComponent = HigherOrder("Users", Users, "users");
export default usersComponent;
