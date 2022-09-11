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
  useEffect(() => {
    randomUppercaseLetter();
  }, []);

  useEffect(() => {
    if (uppercaseLetter && lowercaseLetter && numbers && symbols) {
      setPassword(uppercaseLetter);
    }
  }, [uppercaseLetter, lowercaseLetter, numbers, symbols]);

  const randomUppercaseLetter = () => {
    for (let i = 0; i < 10; i++) {
      const rando = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      setUppercaseLetter((prev) => [...prev, rando]);
    }
  };

  const randomLowercaseLetter = String.fromCharCode(
    97 + Math.floor(Math.random() * 26)
  );

  return <div>{password}</div>;
};

export default Boundary;
