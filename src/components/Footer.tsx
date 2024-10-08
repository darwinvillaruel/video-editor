import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--background))] mt-5 py-5 border-t-2 border-dotted">
      <div>
        <h2 className="font-semibold text-lg">👨‍💻 Get in Touch</h2>
        <p>You can reach out to me through these different channels</p>
      </div>
      <div className="flex flex-row gap-2 my-3 text-2xl">
        <FaInstagramSquare />
        <FaFacebook />
        <FaTiktok />
        <FaEnvelope />
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
