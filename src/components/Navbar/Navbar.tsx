import { fonts } from "../../data/fonts";
import { useNavbar } from "../../features/components/Navbar";
import NavbarCSS from "./Navbar.module.scss";

interface Props {
  setFont: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ setFont }: Props) => {
  const { open, setOpen, currentFont, handleFont } = useNavbar({ setFont });

  return (
    <nav className={NavbarCSS.navbar}>
      <i className="fa-solid fa-book fa-2x" />
      <ul onClick={() => setOpen(!open)}>
        <li className={NavbarCSS.placeholderFont}>
          <span>{currentFont}</span>
        </li>
        {open == true && (
          <div className={NavbarCSS.dropdown}>
            <li className={NavbarCSS.item}>
              <button onClick={() => handleFont(fonts.baskerville)}>
                Libre Baskerville
              </button>
            </li>
            <li className={NavbarCSS.item}>
              <button onClick={() => handleFont(fonts.courier)}>Courier</button>
            </li>
            <li className={NavbarCSS.item}>
              <button onClick={() => handleFont(fonts.arial)}>Arial</button>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
