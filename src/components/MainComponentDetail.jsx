import React from "react";

function MainComponentDetail() {
  return (
    <div
      id="profile"
      className="h-128 overflow-y-scroll w-full lg:w-3/5 rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
    >
      <div className="p-4 md:p-12 text-center lg:text-left">
        <div
          className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('images/DSC_5579_phone.jpg')`,
          }}
        ></div>

        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Bárdos Richárd</h1>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
          What you do
        </p>
        <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
          Your Location - 25.0000° N, 71.0000° W
        </p>
        <p className="pt-8 text-sm">
          Totally optional short description about yourself, what you do and so
          on.
        </p>

        <div className="pt-12 pb-8">
          <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
            Get In Touch
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default MainComponentDetail;
