import Link from "next/link";
import Socials from "./socials";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
      <h1 className="text-lg font-bold">
        <Link href="/">Blog Cast</Link>
      </h1>
      <nav className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Socials />
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#FF4D00] rounded-md">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
