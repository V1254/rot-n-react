import { useState } from "react";
import "./App.css";
import rotN from "./Algorithm";

function App() {
  const [plain, setPlain] = useState("");
  const [cipher, setCipher] = useState("");
  const [shiftValue, setShiftValue] = useState(1);

  const handleTextChange = (e) => {
    const plainText = e.target.value;
    const encryptedText = rotN(plainText, parseInt(shiftValue));
    setPlain(plainText);
    setCipher(encryptedText);
  };

  const handleAlgorithmChange = (e) => {
    const shiftBy = e.target.value;
    const encryptedText = rotN(plain, parseInt(shiftBy));
    setShiftValue(shiftBy);
    setCipher(encryptedText);
  };

  return (
    <div className="App">
      <h2>Rot-N cipher</h2>
      <textarea
        className="cipherText"
        placeholder="Enter some text to encrypt"
        value={plain}
        onChange={handleTextChange}
      />
      <p className="arrow">↓</p>
      <select id="rot-n" value={shiftValue} onChange={handleAlgorithmChange}>
        {Array.from({ length: 25 }).map((_, index) => (
          <option value={index + 1}>Rot-{index + 1}</option>
        ))}
      </select>
      <p className="arrow">↓</p>
      <textarea
        className="encryptedText"
        placeholder="Encrypted text will appear here"
        value={cipher}
      />
    </div>
  );
}

export default App;
