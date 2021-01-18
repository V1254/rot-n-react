const encryptText = (text, shift) =>
  text
    .split("")
    .map((char) => {
      if (!char.match(/[a-z]/i)) return char;
      let startIndex = 97;
      if (char === char.toUpperCase()) {
        startIndex = 65;
      }

      const maxIndex = startIndex + 25;

      let nextCharCode = char.charCodeAt(0) + shift;

      if (nextCharCode > maxIndex) {
        nextCharCode = startIndex + (nextCharCode - maxIndex) - 1;
      }

      const rtn = String.fromCharCode(nextCharCode);
      return rtn;
    })
    .join("");

export default encryptText;
