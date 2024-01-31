import { sum } from "../sum";

test("Sum method should calculate the sum of two numbers", () => {
  const result = sum(2, 3);

  // Asseration
  expect(result).toBe(5);
});
