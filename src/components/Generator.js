import { BsCheck2Square, BsArrowRightShort } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { useState, useEffect } from "react";

const Generator = () => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    setPassword(() => {

      

    });
  };

  //

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-screen-sm flex-col justify-center p-10 text-white">
        <div className="flex self-center text-xl text-white text-opacity-50">
          Password Generator
        </div>

        <div className="my-5 flex flex-col gap-5">
          <div className="flex w-full flex-row items-center justify-between rounded-sm bg-[#24232B] p-5 sm:text-2xl">
            <div className="flex tracking-wider">Jx8N9H7ba4</div>
            <div className="flex text-[#A5FFB3]">
              <AiOutlineCopy />
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#24232B] p-5">
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
            <div className="my-5 flex flex-col gap-2.5 text-sm sm:text-base ">
              <div className="flex flex-row items-center gap-2.5">
                <button>
                  <BsCheck2Square className="text-lg" />
                </button>
                <p>Include Uppercase Letters</p>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <button>
                  <BsCheck2Square className="text-lg" />
                </button>
                <p>Include Lowercase Letters</p>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <button>
                  <BsCheck2Square className="text-lg" />
                </button>
                <p>Include Numbers</p>
              </div>
              <div className="flex flex-row items-center gap-2.5">
                <button>
                  <BsCheck2Square className="text-lg" />
                </button>
                <p>Include Symbols</p>
              </div>
            </div>
            <div className="flex w-full bg-[#18171F] p-5">
              <div className="flex w-full justify-between">
                <div className="flex text-white text-opacity-50">STRENGTH</div>
                <div className="flex text-xl text-yellow-500">MEDIUM</div>
              </div>
            </div>
            <button onClick={generatePassword}>
              <div className="mt-5 flex w-full items-center justify-center bg-[#A5FFB3] p-5 font-semibold text-[#0D3318]">
                GENERATE <BsArrowRightShort className="sm:text-3xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generator;
