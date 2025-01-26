import { Post } from "@/queries/blog-data";
import PostCard from "./blog-card";
import LatestPost from "./latest-blog";

interface Posts {
  node: Post;
}
type Props = {
  posts: Posts[];
};

const PostList = async (props: Props) => {
  const { posts } = props;
  // Get the latest post
  const latestPost = posts[0].node;

  // Get the rest of the posts
  const restPosts = posts.slice(1);

  return (
    <>
      <div className="px-8 py-8 bg-gray-100">
        <LatestPost post={latestPost} />
      </div>
      {restPosts.length > 0 && (
        <div className="px-8 py-16">
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {restPosts.map((post) => (
              <PostCard key={post.node.slug} post={post.node} />
            ))}
          </div>
          <button className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Show more posts
          </button>
        </div>
      )}
    </>
  );
};

export default PostList;
