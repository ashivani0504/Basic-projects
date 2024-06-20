import HigherOrder from "./HigherOrder";

function Posts({ data }) {
  return (
    <div>
      {data.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
const postsComponent = HigherOrder("Posts", Posts, "posts");
export default postsComponent;
