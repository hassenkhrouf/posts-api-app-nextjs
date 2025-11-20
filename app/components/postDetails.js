import React from "react";

async function PostDetails({ params }) {
  const postId = params?.postId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { next: { revalidate: 60 } }
  );
  const post = await response.json();
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid black",
        margin: "24px",
        backgroundColor: "lightgray",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "blue", marginBottom: "10px" }}>{post.title}</h2>
      <hr />
      <p style={{ color: "black" }}>{post.body}</p>
    </div>
  );
}
export default PostDetails;
