export default function MortgageForm() {
  return (
    <div className="bg-teal-50 w-full md:w-2/3 p-8 rounded-lg">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white font-bold">
              1
            </div>
            <span className="text-sm mt-2">Question Category</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-teal-600 text-teal-600 font-bold">
              2
            </div>
            <span className="text-sm mt-2">Question Category</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-teal-600 text-teal-600 font-bold">
              3
            </div>
            <span className="text-sm mt-2">Question Category</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block font-semibold text-gray-700 mb-2">What are you looking for?</label>
          <div className="flex space-x-3">
            <button className="px-4 py-2 rounded-lg bg-teal-600 text-white">I'm buying a property</button>
            <button className="px-4 py-2 rounded-lg border border-teal-600 text-teal-600">I'm refinancing my home</button>
          </div>
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-2">What is the property status?</label>
          <div className="flex space-x-3">
            <button className="px-4 py-2 rounded-lg bg-teal-600 text-white">Completed</button>
            <button className="px-4 py-2 rounded-lg border border-teal-600 text-teal-600">Under-construction</button>
            <button className="px-4 py-2 rounded-lg border border-teal-600 text-teal-600">Land</button>
          </div>
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-2">What is the value of the property?</label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input type="text" defaultValue="240,000" className="px-3 py-2 w-full outline-none" />
            <span className="bg-gray-100 px-4 text-gray-600">AED</span>
          </div>
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-2">Where is the property located?</label>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>Choose an area</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-teal-600 text-white px-6 py-2 rounded-lg">Next</button>
      </div>
    </div>
  );
}
