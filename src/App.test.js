import { divide, multiply, subtract, sum } from "./utils";

test('Adding 2+3 returns 5', () => {
  expect(sum(2,3)).toBe(5);
});

test('Subtracting 10-2 returns 8', () => {
  expect(subtract(10,2)).toBe(8);
});

test('Multiplying 10*2 returns 20', () => {
  expect(multiply(10,2)).toBe(20);
});

test('Dividing 10/2 returns 5', () => {
  expect(divide(10,2)).toBe(5);
});

