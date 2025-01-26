import { Post } from "@/queries/blog-data";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

const PostCard = (props: Props) => {
  const { post } = props;
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="mt-4">
        <Image
          className="object-cover rounded-md w-full h-auto"
          src={post?.coverImage.url}
          alt={post?.title}
          width={800}
          height={400}
        />
        <h3 className="text-xl font-semibold">{post?.title}</h3>
        <p>
          Posted on {new Date(post?.publishedAt).toDateString()} by{" "}
          {post?.author.name}
        </p>
      </article>
    </Link>
  );
};

export default PostCard;
