import { describe, it, expect } from "vitest";
import generateTypes from "../src";

const testcase = {
  given: import(
    "./fixtures/contentful-export-zrihl5w7b3ma-master-2025-07-13T18-14-22.json"
  ),
  expected: "Frederik",
};

describe("openapi-typescript test", () => {
  it("should generate typescript types from contentful export", async () => {
    const { given, expected } = testcase;
    const json = await given;
    const result = generateTypes(json);
    expect(result).toEqual(expected);
  });
});
