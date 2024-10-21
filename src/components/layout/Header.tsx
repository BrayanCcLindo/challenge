import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container flex items-center justify-between w-full p-4 mx-auto text-gray-500 sm:flex-row">
      <Link to={"/"}>
        <img
          src="/svg/logo/main-logo.svg"
          alt="RIMAC Logo"
          className="object-contain mb-2 sm:mb-0"
        />
      </Link>

      <div className="flex items-center gap-4">
        <span className="hidden mr-2 text-sm t sm:block sm:text-base">
          ¡Compra por este medio!
        </span>
        <a
          href="tel:014116001"
          className="flex items-center gap-2 text-lg font-bold sm:text-xl"
        >
          <img src="/svg/phone.svg" alt="call-rimac" />
          (01) 411 6001
        </a>
      </div>
    </header>
  );
}
