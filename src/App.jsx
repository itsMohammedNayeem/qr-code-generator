function App() {
  return (
    <div className="min-h-screen w-full grid place-content-center bg-[#181818] justify-center text-center">
      <div className="w-[23rem] p-7 space-y-8 text-slate-300">
        <div className="w-full h-[18rem] border border-neutral-200 rounded-3xl grid place-content-center bg-[#202020]">
          <span>None</span>
        </div>
        <form className="space-y-5">
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
