/* eslint-disable react/prop-types */
import HigherOrder from "./HigherOrder";

function Users({ data }) {
  return (
    <div>
      {data.slice(0, 10).map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}

const usersComponent = HigherOrder("Users", Users, "users");
export default usersComponent;
