import { describe, expect, it } from "vitest";
import vercelConfig from "./vercel.json";

describe("Vercel SPA routing", () => {
  it("rewrites all routes to index.html so React Router can handle deep links", () => {
    expect(vercelConfig.rewrites).toContainEqual({
      source: "/(.*)",
      destination: "/index.html"
    });
  });
});
