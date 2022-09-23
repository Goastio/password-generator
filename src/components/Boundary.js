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
  isActive,
  setIsActive,
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
    const mySymbols = [];
    for (let i = 0; i < currentLength; i++) {
      const syms = "/?{}][,.><+=-_!@#$%".split("");
      const rando = Math.floor(Math.random() * syms.length);
      const mySymbol = syms[rando];
      mySymbols.push(mySymbol);
    }
    setSymbols((prev) => [...prev, ...mySymbols]);
  };

  const generatePassword = (e) => {
    setPassword(() => {  
    })
  }; 

  useEffect(() => {
    randomUppercaseLetter();
  }, []);

  useEffect(() => {
    if (isActive === true) {
      setPassword(uppercaseLetter);
    }
    console.log(password);
  }, [uppercaseLetter]);

  return <div>{password}</div>;
};

export default Boundary;
