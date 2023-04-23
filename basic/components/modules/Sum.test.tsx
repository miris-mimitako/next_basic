import sumNumber from './Sum';

describe('sumNumber', () => {
  test('引数が2と3の場合、5を返す', () => {
    const result = sumNumber(2, 3);
    expect(result).toBe(5);
  });

  test('引数が-2と5の場合、3を返す', () => {
    const result = sumNumber(-2, 5);
    expect(result).toBe(3);
  });

  test('引数が0と0の場合、0を返す', () => {
    const result = sumNumber(0, 0);
    expect(result).toBe(0);
  });
});