import useCalculator from "../../hooks/useCalculator";

const { addition, substraction, division, modulo, square } = useCalculator();

test("unit addition", () => {
    const result = addition("5", "5");
    expect(result).toEqual("10");
});

test("unit substraction", () => {
    const result = substraction("5", "5");
    expect(result).toEqual("0");
});

test("unit division", () => {
    const result = division("10", "2");
    expect(result).toEqual("5");
});

test("unit modulo", () => {
    const result = modulo("10", "2");
    expect(result).toEqual("0");
});

test("unit square", () => {
    const result = square("36");
    expect(result).toEqual("6");
});