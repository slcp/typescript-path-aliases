import fn from "./index";
import { configValue } from "@config";

describe("index default export", () => {
  it("should return expected object", () => {
    // Arrange
    const expected = {
      num: 12345,
      str: configValue,
    };

    // Act
    const actual = fn();

    // Assert
    expect(actual).toStrictEqual(expected);
  });
});
