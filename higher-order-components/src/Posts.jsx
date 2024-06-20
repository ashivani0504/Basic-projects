import { useEffect, useState } from "react";
import HigherOrder from "./HigherOrder";

function Posts() {
  return (
    <div>
      <h1>POSTS</h1>

      {/* {posts.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))} */}
    </div>
  );
}

const postsComponent = HigherOrder("Posts");
export default postsComponent;
