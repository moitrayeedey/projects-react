import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  //variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //get the reference to password 
  const passwordRef = useRef(null);

  // to optimize the passwordGenerator function, we are using useCallback();
  const passwordGenerator = useCallback(
    () => {
      let currPassword = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) {
        str += "0123456789";
      }
      if(charactersAllowed) {
        str += "~`@!$%#^&*:;,./|";
      }
      for (let index = 1; index <= length; index++) {
        let char = Math.floor(Math.random()*str.length+1);
        currPassword += str.charAt(char);
      }
      setPassword(currPassword);
    },
    [length, numberAllowed, charactersAllowed, setPassword],
  );

  //logic for copying the password
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password); 
  }, [password]);

  //to run the passwordGenerate()
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]);
  
  return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-rose-500 bg-gray-700">
        <h1 className="text-center text-4xl font-semibold m-5">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">  
          <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}/>
          <button className="outline-none bg-rose-400 text-white px-3 py-0.5 shrink-0"
          onClick={copyPassword}>Copy!</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}/>
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={charactersAllowed}
            id="characterInput"
            onChange={() => {
              setCharactersAllowed((prev) => !prev);
            }}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App
