import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

async function Post(props) {
  const params = await props.params;

  if (!params?.postId) {
    return <div>Invalid postId</div>;
  }

  return (
    <div>
      <h1>Post Details</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetails params={params} />
      </Suspense>
    </div>
  );
}
export default Post;
