import getBuffer from '../js/funcGetBuffer';
import ArrayBufferConverter from '../js/classBuffer';

test('testing ArrayBufConverter', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
