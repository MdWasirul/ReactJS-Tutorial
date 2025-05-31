import { sum } from "../sum";

test("sum function should calculate sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion  --important my expection is resut should be 7
  expect(result).toBe(7);
});
