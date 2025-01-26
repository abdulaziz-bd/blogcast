import { Post } from "@/queries/blog-data";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

const LatestPost = (props: Props) => {
  const { post } = props;
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="mt-4">
        <h3 className="text-xl font-semibold">{post?.title}</h3>
        <p>
          Posted on {new Date(post?.publishedAt).toDateString()} by{" "}
          {post?.author.name}
        </p>
        <Image
          className="mt-4 object-cover rounded-md xs:w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
          src={post?.coverImage.url}
          alt={post?.title}
          width={800}
          height={400}
        />
        <p className="mt-4 text-gray-700">{post?.brief}</p>
      </article>
    </Link>
  );
};

export default LatestPost;
