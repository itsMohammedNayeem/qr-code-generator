import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target[0].value);
  };

  return (
    <div className="min-h-screen w-full grid place-content-center bg-[#181818] justify-center text-center">
      <div className="w-[23rem] p-7 space-y-8 text-slate-300">
        {value ? (
          <QRCode
            value={value}
            // style={{ height: "auto", width: "100%", maxWidth: "100%" }}
            className="w-full max-w-full h-auto border border-neutral-200"
          />
        ) : (
          <div className="w-full h-[18rem] border border-neutral-200 grid place-content-center bg-[#202020]">
            <span>Scan Your Way: Text or URL to QR</span>
          </div>
        )}
        <form className="space-y-5" onSubmit={handleChange}>
          <div>
            <input
              type="text"
              className="bg-[#252525] rounded w-full p-2 focus:outline focus:outline-neutral-300"
              placeholder="enter text or url"
            />
          </div>
          <button className="rounded w-full py-2 flex justify-center bg-[#252525] hover:bg-neutral-600 duration-200 focus:outline focus:outline-neutral-600">
            Create QR Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
