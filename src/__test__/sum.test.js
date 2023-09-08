import { sum } from "../Components/sum";

test('Sum function to calculate sum of tow numbers', () => { 
  const result = sum(4, 5);
  
  // Assertion
  expect(result).toBe(7)
})