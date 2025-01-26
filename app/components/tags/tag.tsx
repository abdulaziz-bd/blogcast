import Link from "next/link";

interface Tag {
  name: string;
  slug: string;
  id: string;
}

type Props = {
  tag: Tag;
};

const Tag = (props: Props) => {
  const { tag } = props;
  const { name, slug, id } = tag;

  return (
    <div className="m-1 bg-gray-200 p-1 rounded-md text-sm text-gray-800">
      <Link href={`/tags/${id}`}>{tag?.name}</Link>
    </div>
  );
};

export default Tag;
