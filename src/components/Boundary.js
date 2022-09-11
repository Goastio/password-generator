import { useEffect } from "react";

const Boundary = ({
  password,
  setPassword,
  lowercaseLetter,
  setLowercaseLetter,
  uppercaseLetter,
  setUppercaseLetter,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
  currentLength,
  setCurrentLength,
}) => {
  const randomUppercaseLetter = () => {
    for (let i = 0; i < 10; i++) {
      const rando = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      setUppercaseLetter((prev) => [...prev, rando]);
    }
  };

  const randomLowercaseLetter = () => {
    for (let i = 0; i < 10; i++) {
      const rando = String.fromCharCode(97 + Math.floor(Math.random() * 26));
      setLowercaseLetter((prev) => [...prev, rando]);
    }
  };

  const randomNumbers = () => {
    for (let i = 0; i < 10; i++) {
      const rando = String.fromCharCode(48 + Math.floor(Math.random() * 10));
      setNumbers((prev) => [...prev, rando]);
    }
  };

  const randomSymbols = () => {
    for (let i = 0; i < 10; i++) {
      const rando = String.fromCharCode(
        33 + Math.floor(Math.random() * 31)
      );
      setSymbols((prev) => [...prev, rando]);
      console.log(rando);
    }
  };

  useEffect(() => {
    if (uppercaseLetter && lowercaseLetter && numbers && symbols) {
      setPassword(uppercaseLetter);
    }
  }, [uppercaseLetter, lowercaseLetter, numbers, symbols]);

  useEffect(() => {
    randomSymbols();
  }, []);

  return <div>{password}</div>;
};

export default Boundary;
