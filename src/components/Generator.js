import React from "react";

const Generator = () => {
  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-screen-sm flex-col justify-center p-10 text-white">
        <div className="flex self-center text-xl ">Password Generator</div>

        <div className="my-10 flex flex-col gap-5">
          <div className="w-full justify-center rounded-sm bg-neutral-600 p-5 text-center">
            This is where the password will generate.
          </div>
          <div className="flex w-full justify-center rounded-sm bg-neutral-700 p-20">
            testing
          </div>
        </div>
      </div>
    </>
  );
};

export default Generator;
