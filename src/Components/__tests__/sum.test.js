import {sum} from "../sum.js";
test('check for sum', () => { 
    const result = sum(3,4);


    expect(result).toBe(7);
 })