export function manualInput (e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    /* console.log (name); */
    console.log (value);
  }

export function validateHEX (text: string) {
    return /[# 0-9 a-f A-F]{6}/.test(text);
}

export function hexToDec(hex: string):number {
  return parseInt(hex, 16);
}