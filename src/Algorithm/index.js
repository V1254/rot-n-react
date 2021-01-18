const encryptText = (text, shift) => {
  console.log(`received: ${text} and ${shift} | typofShift: ${typeof shift}`);

  const result = text
    .split("")
    .map((char) => {
      if (!char.match(/[a-z]/i)) return char;

      console.log(`char is: ${char}`);

      let startIndex = 97;
      if (char === char.toUpperCase()) {
        startIndex = 65;
      }

      const maxIndex = startIndex + 25;

      let nextCharCode = char.charCodeAt(0) + shift;

      if (nextCharCode > maxIndex) {
        console.log(`entered if...`);
        nextCharCode = startIndex + (nextCharCode - maxIndex) - 1;
      }

      const rtn = String.fromCharCode(nextCharCode);
      // console.log(`Algorith: current: ${char} | next: ${nextCharCode} | nextChar: ${rtn}`);

      return rtn;
    })
    .join("");

  console.log(`encrypted as: ${result} from ${text} using rot-${shift}`);
  return result;
};

export default encryptText;
