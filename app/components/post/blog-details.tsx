import { Post } from "@/queries/blog-data";
import Image from "next/image";
import Tag from "../tags/tag";

type Props = {
  post: Post;
};

const BlogDetails = (props: Props) => {
  const { post } = props;
  return (
    <article className="bg-white p-3 mt-3 flex flex-col justify-center items-center">
      <Image
        className="rounded-lg"
        src={post?.coverImage.url}
        alt={post?.title}
        width={500}
        height={500}
      />
      <h1 className="text-4xl font-bold pt-5">{post?.title}</h1>
      <h2 className="text-xl pt-3 pb-3">{post?.title}</h2>

      <div className="flex mb-4">
        {post?.tags.map((tag) => (
          <Tag key={tag?.id} tag={tag} />
        ))}
      </div>

      {post?.content && (
        <div
          className="post-details"
          dangerouslySetInnerHTML={{ __html: post?.content.html }}
        />
      )}
    </article>
  );
};

export default BlogDetails;
