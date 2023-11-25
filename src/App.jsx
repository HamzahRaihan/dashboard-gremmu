import ButtonPrimary from "./layout/ButtonPrimary";

function App() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  
  return (
    <div className="justify-center items-center flex flex-row">
      <div className="flex items-center justify-center border bg-slate-50 w-full max-w-[660px] flex-col mt-10 mb-10 px-8 py-8 rounded-xl border-solid border-red-100 max-md:my-10 max-md:px-5">
        <img srcSet="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/GreenWorldAware-2%201.png?updatedAt=1696991576040" />
        <div className="items-center bg-white self-stretch flex flex-col mt-9 p-7 rounded-xl max-md:max-w-full max-md:px-5">
          <label className="text-stone-900 text-xs font-bold leading-5 self-stretch my-2">Email</label>
          <input type="text" className="text-gray-500 text-xs leading-5 tracking-normal items-stretch self-stretch shadow-sm bg-gray-200 px-5 py-3.5 rounded-xl w-full" placeholder="Input your email" />

          <label className="text-stone-900 text-xs font-bold leading-5 self-stretch my-2">Password</label>
          <input type="password" className="text-gray-500 text-xs leading-5 tracking-normal items-stretch self-stretch shadow-sm bg-gray-200 px-5 py-3.5 rounded-xl w-full" placeholder="Input your password" />
          <div className="items-stretch flex w-[137px] max-w-full gap-2 mt-2 self-start">
            <div className="justify-center items-stretch bg-white bg-opacity-0 flex aspect-[0.8] flex-col px-2 py-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="h-4 w-4 border border-[color:var(--neutral-5,#D9D9D9)] bg-white rounded-sm border-solid" />
              </label>
            </div>
            <div className="text-stone-900 text-xs font-bold leading-5 self-center my-auto">Remember me</div>
          </div>
          <div className="justify-end items-center flex w-[243px] max-w-full gap-5 mt-2 self-end">
            <div className="text-stone-900 text-xs font-medium leading-5 underline flex-1 my-auto">Forgot Password?</div>
            <ButtonPrimary onClick={handleButtonClick}>Login</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
