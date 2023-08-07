const fizzbuzz = require("./fizzbuzz");

describe("fuzzbuzz", () => {
    test("should return 1 when recieve 1", () => {
        // Prepare
        const expected = 1;
        // Execute
        const result = fizzbuzz(1);
        // Validate
        expect(expected).toEqual(result);
    })

    test("should return fizz when recieve 3", () => {
        // Prepare
        const expected = "fizz";
        // Execute
        const result = fizzbuzz(3);
        // Validate
        expect(expected).toEqual(result);
    })

    test("should return fizz when recieved a multiple of tree", () => {
        // Prepare
        const expected = "fizz";
        // Execute
        const result = fizzbuzz(6);
        // Validate
        expect(expected).toEqual(result);
    })

    test("should return buzz when recieve 5", () => {
        // Prepare
        const expected = "buzz";
        // Execute
        const result = fizzbuzz(5);
        // Validate
        expect(expected).toEqual(result);
    })

    test("should return buzz when recieved a multiple of five", () => {
        // Prepare
        const expected = "buzz";
        // Execute
        const result = fizzbuzz(5);
        // Validate
        expect(expected).toEqual(result);
    })

    test("should return fizzbuzz when recieved a multiple of five and tree", () => {
        // Prepare
        const expected = "fizzbuzz";
        // Execute
        const result = fizzbuzz(15);
        // Validate
        expect(expected).toEqual(result);
    })
})