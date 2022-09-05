import React from "react";

const Generator = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex text-3xl text-white">Password Generator</div>
        <div className="my-10 flex w-full max-w-screen-sm justify-center rounded-sm bg-neutral-700 p-20 text-white">
          <div className="w-3/4 rounded-sm bg-neutral-600">
            This is where the password will generate.
          </div>
        </div>
      </div>
    </>
  );
};

export default Generator;
