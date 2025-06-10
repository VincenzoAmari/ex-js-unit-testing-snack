const { getInitials } = require("./snack.js");

test("la funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Vincenzo Amari")).toBe("V.A.");
  expect(getInitials("federica giorgini")).toBe("F.G.");
});
