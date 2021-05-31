// const { pathsToModuleNameMapper } = require("ts-jest/utils");
// const { compilerOptions } = require("./tsconfig");
const { default: tsconfigTransformer } = require("jest-module-name-mapper");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: tsconfigTransformer("./tsconfig.json"),
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions),
};
