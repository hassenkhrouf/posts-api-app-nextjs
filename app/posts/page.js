import Link from "next/link";
import React from "react";

async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts = await response.json();

  return (
    <div>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              border: "1px solid black",
              margin: "24px",
              backgroundColor: "lightgray",
              borderRadius: "8px",
            }}
          >
            <h3>{post.title}</h3>
            <p>
              {post.body.length > 50
                ? post.body.slice(0, 50) + "..."
                : post.body}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Posts;
