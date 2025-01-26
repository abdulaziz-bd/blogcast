import Socials from "./socials";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
      <p>© 2025 Blog Cast</p>
      <div className="flex items-center space-x-4">
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
