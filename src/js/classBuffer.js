export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let result = '';
    const bufferView = new Uint16Array(this.buffer);
    bufferView.forEach((char) => {
      result += String.fromCharCode(char);
    });
    return result;
  }
}
