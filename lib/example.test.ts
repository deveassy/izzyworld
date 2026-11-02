import { describe, expect, it } from "vitest";
import { add } from "@/lib/example";

describe("add", () => {
  it("returns the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
