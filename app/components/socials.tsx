import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {};

const Socials = (props: Props) => {
  return (
    <>
      <a
        href="http://x.com/@fahad_worldrf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter />
      </a>

      <a
        href="http://github.com/abdulazizbd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </>
  );
};

export default Socials;
