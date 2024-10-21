import Footer from "@/components/layout/Footer";
import LandingForm from "@/components/form/LandingForm";

export default function Homepage() {
  return (
    <div className="flex flex-col flex-grow">
      <main className="flex items-center justify-center flex-grow px-6 font-poppins sm:py-8">
        <img
          src="/images/purple-blur.png"
          className="fixed -bottom-96 -left-10 -z-10 sm:bottom-0 sm:left-0"
          alt="decoration"
        />
        <img
          src="/images/green-blur.png"
          className="fixed -right-10 -top-96 -z-10 sm:right-0 sm:top-0"
          alt="decoration"
        />
        <div className="flex flex-col items-center justify-center w-full md:hidden">
          <div className="flex items-center gap-5 mb-6">
            <div className="space-y-2">
              <span className="rounded-lg bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] px-2 py-[2px] text-xs font-semibold transition-all">
                Seguro Salud Flexible
              </span>
              <h1 className="text-[28px] font-bold leading-9 md:text-4xl">
                Creado para ti y tu familia
              </h1>
            </div>
            <img
              className="object-cover rounded-lg"
              src="/images/landingImg.jpg"
              alt="Family"
              width={136}
              height={160}
            />
          </div>
          <div className="py-6 space-y-6 border-t border-gray-100">
            <p className="text-sm tracking-wide text-gray-500">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>
            <LandingForm />
          </div>
        </div>
        <div className="items-center justify-center hidden gap-6 md:flex">
          <img
            src="/images/landingImg.jpg"
            alt="Family"
            className="object-cover rounded-3xl"
          />
          <div className="max-w-[400px] space-y-6 p-8 text-gray-500">
            <span className="rounded-lg bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] px-2 py-1 text-xs font-semibold transition-all">
              Seguro Salud Flexible
            </span>
            <h1 className="text-2xl font-bold">Creado para ti y tu familia</h1>
            <p className="text-sm">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>
            <LandingForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
