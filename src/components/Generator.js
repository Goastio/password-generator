import React from "react";

const Generator = () => {
    console.log()
  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-screen-sm flex-col justify-center p-10 text-white">
        <div className="flex self-center text-xl text-[#7F7E87]">
          Password Generator
        </div>

        <div className="my-5 flex flex-col gap-5">
          <div className="w-full rounded-sm bg-[#24232B] p-5 text-start tracking-wider sm:text-2xl">
            Jx8N9H7ba4
          </div>
          <div className="flex w-full bg-[#24232B] p-5">
            <div className="flex w-full flex-col">
              <div className="flex w-full justify-between">
                <div className="flex rounded-sm text-sm">Character Length</div>
                <div className="flex text-xl text-[#A5FFB3]">10</div>
              </div>
              <div className="slidecontainer flex">
                <input
                  type="range"
                  min="1"
                  max="100"
                  className="slider w-full"
                  id="myRange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generator;
