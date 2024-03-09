import React from "react";

export default function App() {
  return (
    <div>
      <div class="container mx-auto px-3 flex bg-black w-full sm:bg-yellow-200 transition duration-300 ease-in-out active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        <div className=" flex hover:bg-red-600 justify-center itmes-center mx-auto bg-blue-600 p-8 text-white font-bold uppercase border-black border-4 h-40 basis-3/12">
          Box
        </div>

        {/* <div className=" block bg-blue-600 p-8 text-white font-bold uppercase border-black border-4 h-[1000px] basis-6/12">
          Box
        </div> */}
      </div>
    </div>
  );
}
