import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-blue-500 rounded-b-3xl overflow-hidden">
      <Image
        src="/hero_section.png"
        alt="Skyline"
        fill
        className="object-cover opacity-80 z-0"
        priority
      />
    
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white text-center">
        <p className="text-sm uppercase tracking-widest text-blue-200">Your Trusted Partner in Home Financing</p>
        <h1 className="text-4xl sm:text-5xl font-bold mt-4 leading-tight">
          Unlocking Doors<br />To Your Dream Home
        </h1>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Apply Online in Two Minutes
          </button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Speak to a Mortgage Expert
          </button>
        </div>
      </div>

      {/* Step indicators (hidden on small screens) */}
      <div className="hidden sm:flex absolute left-10 top-1/3 flex-col items-center text-white">
        <div className="w-10 h-10 rounded-full bg-white text-blue-600 font-bold flex items-center justify-center mb-2">1</div>
        <div className="h-16 w-px bg-white"></div>
        <div className="w-10 h-10 rounded-full border-2 border-white text-white font-bold flex items-center justify-center">2</div>
      </div>
    </section>
  );
}
