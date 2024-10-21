function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 w-full gap-4 px-4 mx-0 text-sm bg-gray-500">
      <div className="container flex flex-col items-center justify-center mx-auto sm:flex-row sm:justify-between">
        <div className="items-center justify-center hidden w-full py-6 border-b sm:flex sm:justify-start sm:border-0">
          <img
            src="/svg/logo/white-logo.svg"
            className="object-contain"
            alt="logo-polacy"
          />
        </div>
        <div className="flex items-center justify-center w-full py-6 border-b sm:hidden sm:border-0">
          <img
            src="/svg/logo/logo-mobile.svg"
            className="object-contain"
            alt="logo-polacy"
          />
        </div>

        <p className="w-full py-6 text-center text-white sm:text-right">
          © 2023 RIMAC Seguros y Reaseguros.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
