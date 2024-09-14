import Link from "next/link";
// import Logo from "./Logo";
// import WhiteJoyOATsLogo from "../../public/images/logos/JOY@S_logo_transparency_white.png"
// import BlackJoyOATsLogo from "../../public/images/logos/Joy@S-Stencil_black.png"

const Footer = () => {

  const color = '#ffffff'
  const textColor = '#000000'
  // const logoSrc = BlackJoyOATsLogo

  return (
    <div className="relative left-0 bottom-0 w-full ease-in">
      <footer
        id="contact"
        style={{ backgroundColor: `${color}` }}
        className="relative m-auto flex flex-col-reverse max-w-[1240px] sm:flex-row justify-between items-center p-4 mt-10">
        <Link href="/"
          className="max-w-sm:mr-auto my-2 sm:my-0"
          title="Return to top of Home Page.">
          {/* <Logo logoImg={logoSrc}/> */}
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="flex flex-col sm:flex-row justify-between items-center mx-auto my-2 sm:my-0">
          <li className="p-2">
            <Link
              href="https://www.joyserquina.com"
              target="_blank"
              rel="noreferrer noopener nofollow">WebDev</Link>
          </li>
          <li className="p-2">
            <Link
              href="https://linkedin.com/in/joy-serquina"
              target="_blank"
              rel="noreferrer noopener nofollow">LinkedIn</Link>
          </li>
          <li className="p-2">
            <Link
              href="https://instagram.com/joyofalltech.media"
              target="_blank"
              rel="noreferrer noopener nofollow">Instagram</Link>
          </li>
        </ul>
        <Link
          href="https://portal.spiro.media/order/joatl/residential"
          target="_blank"
          rel="noreferrer noopener nofollow">
          <button style={{ color: `${textColor}` }} className="px-8 py-2 border ml-auto">Book Now</button>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;