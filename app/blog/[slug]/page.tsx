import BlogDetails from "@/app/components/post/blog-details";
import { getPost } from "@/queries/blog-data";

type Props = {};
type Params = { slug: string };

const BlogDetailsPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const post = await getPost(slug);

  return <BlogDetails post={post} />;
};

export default BlogDetailsPage;
