
import { useGlobalContext } from "../contexts/GlobalContext";

const Footer = () => {
  const {
    getBgClass,
    getTextClass,
    getSecondaryTextClass,
    getBorderClass,
  } = useGlobalContext();

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div
        className={`border-t mt-2 mb-10 pt-8 text-center ${getBorderClass()}`}
        >
          <p className={`text-sm ${getSecondaryTextClass()}`}>
            © {currentYear} Leab Samchhay. All rights reserved.
          </p>

          <p className={`text-xs mt-2 ${getSecondaryTextClass()}`}>
            Built with React & Tailwind CSS
          </p>
        </div>
    </footer>
  );
};

export default Footer;