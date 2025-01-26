import { getAllPosts } from "@/queries/blog-data";
import PostList from "../components/post/blog-list";

type Props = {};

const BlogPage = async (props: Props) => {
  const posts = await getAllPosts([]);

  return <PostList posts={posts} />;
};

export default BlogPage;
