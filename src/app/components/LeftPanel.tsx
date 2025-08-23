export default function LeftPanel() {
  return (
    <div className="bg-white w-full md:w-1/3 flex flex-col items-center p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
        Let's connect - this won't take long!
      </h2>

      <div className="flex flex-col items-start space-y-6 mb-8">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white font-bold">
            1
          </div>
          <p className="text-gray-700">Tell us about yourself.</p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border border-teal-600 text-teal-600 font-bold">
            2
          </div>
          <p className="text-gray-700">We'll match you with the right mortgage options.</p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border border-teal-600 text-teal-600 font-bold">
            3
          </div>
          <p className="text-gray-700">Our friendly experts will be in touch soon.</p>
        </div>
      </div>

      <img
        src="/burj-khalifa.jpg"
        alt="Dubai Property"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
