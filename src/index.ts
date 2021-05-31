import { AliasedImport } from "@shared/data/types";
import { configValue } from "@config";

const demo: AliasedImport = {
  str: configValue,
  num: 12345,
};

export default function() {
  return demo;
}
