import PostList from "@/app/components/post/blog-list";
import { getAllPosts, Tag } from "@/queries/blog-data";
import Link from "next/link";

interface TagParams {
  id: string;
}
type Props = {};

const BlogByTagPage = async ({ params }: { params: TagParams }) => {
  const { id } = await params;
  const posts = await getAllPosts([id]);
  const tags = posts[0].node.tags;

  const foundTag = tags.find((tag) => tag.id === id) as Tag;

  return (
    <div className="flex flex-col">
      <div className="flex pt-4 pl-4 mb-4 text-2xl">
        <p>
          {posts.length} posts tagged with {foundTag.name}
        </p>
        <span className="mr-2">|</span>
        <Link href="/blog" className="underline">
          See All Posts
        </Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export default BlogByTagPage;
