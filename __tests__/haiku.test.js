import { Haiku } from '../src/js/haiku.js';

describe('Haiku', () => {

  test('should correctly create a haiku object', () => {
    const haiku = new Haiku("poem");
    expect(haiku.poem).toEqual("poem");
  });
  // let userPoem;

  // beforeEach(() => {
  //   userPoem = new Haiku(`Here we have
  //     a line counting machine
  //     if it works`);
  // });

  // test('should count lines from input', () => {

  //   expect(lineCheck(input).toEqual(3));
  // });
});