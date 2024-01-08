import { useState, Suspense } from "react";
import QRCode from "react-qr-code";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 text-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold">QR Code Generator</h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="text"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            placeholder="Enter text or URL"
            onChange={handleChange}
          />
          <button
            onClick={handleChange}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
          >
            Generate QR Code
          </button>
        </form>
        <div className="flex justify-center">
          {value && (
            <Suspense fallback={<p>Loading...</p>}>
              <QRCode value={value} size={256} level={"H"} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
