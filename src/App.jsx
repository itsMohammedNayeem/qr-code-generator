import { useState, Suspense } from "react";
import QRCode from "react-qr-code";

function App() {
  const [value, setValue] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const generateQR = () => {
    if (value.trim() !== "") {
      setShowQR(true);
    } else {
      setShowQR(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          QR Code Generator
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none"
            placeholder="Enter text or URL"
            onChange={handleChange}
          />
          <button
            onClick={generateQR}
            className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded text-white font-semibold transition duration-200 ease-in-out"
          >
            Generate QR Code
          </button>
        </form>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showQR ? "max-h-80" : "max-h-0"
          }`}
        >
          {showQR && (
            <Suspense fallback={<p>Loading...</p>}>
              <QRCode
                value={value}
                size={256}
                level={"H"}
                fgColor="#4F46E5"
                className="mx-auto mt-4"
              />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
