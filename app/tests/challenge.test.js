import { absVal, countLetterE, filterInteger, isEven, removeVowels, square, sub } from "../js/challenge";

test("return abs value", () => {
    expect(absVal(-18)).toBeGreaterThanOrEqual(0);
});

test("check isEven", () => {
    expect(isEven(8)).toBeTruthy();
});

test("check isOdd", () => {
    expect(isEven(69)).toBeFalsy();
});

test("nada vowels", () => {
    expect(removeVowels("faeiouyf")).not.toMatch(/['aeiouy']/gi);
});

test("filter integer", () => {
    const test = ["loooo", 4.5, 2, "lolo"];

    expect(filterInteger(test)).toEqual(expect.arrayContaining([expect.any(Number)]));
});

test("square", () => {
    expect(square(4)).toBeGreaterThanOrEqual(0);
    expect(square(4)).toEqual(4 * 4);
});

test("sub", () => {
    expect(sub(4, 2)).toEqual(2);
});

describe("countLetterE", () => {
    test("exception msg", () => {
        expect(() => countLetterE("iii")).toThrow("no e");
    });
    test("exception", () => {
        expect(() => countLetterE("tgh")).toThrow(Error);
    });
    test("count ok", () => {
        expect(countLetterE("eee")).toEqual(3);
    });
});