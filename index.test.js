import plugin from "./index.js";

describe("Puppeteer Plugin for Vite", () => {
  it("creates a Vite plugin when invoked", () => {
    expect(plugin()).toMatchInlineSnapshot(`
      Object {
        "configResolved": [Function],
        "name": "puppeteer",
        "transformIndexHtml": [Function],
      }
    `);
  });
});
